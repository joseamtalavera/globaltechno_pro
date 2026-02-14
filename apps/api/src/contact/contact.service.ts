import { createHash } from 'node:crypto';

import type { ContactSubmitResponse } from '@globaltechno/shared';
import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async createLead(
    dto: CreateContactDto,
    ipAddress: string | undefined,
    userAgent: string | undefined
  ): Promise<ContactSubmitResponse> {
    if (!dto.consent) {
      throw new BadRequestException('Consent is required');
    }

    const ipHash = createHash('sha256')
      .update(ipAddress ?? 'unknown')
      .digest('hex');
    const sanitizedAgent = (userAgent ?? 'unknown').slice(0, 512);

    const lead = await this.prisma.contactLead.create({
      data: {
        name: dto.name,
        company: dto.company,
        email: dto.email.toLowerCase(),
        message: dto.message,
        consent: dto.consent,
        ipHash,
        userAgent: sanitizedAgent
      }
    });

    return {
      id: lead.id,
      receivedAt: lead.createdAt.toISOString()
    };
  }
}
