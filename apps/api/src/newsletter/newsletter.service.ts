import { createHash } from 'node:crypto';

import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';

export interface NewsletterSubscribeResponse {
  id: string;
  subscribedAt: string;
}

@Injectable()
export class NewsletterService {
  constructor(private readonly prisma: PrismaService) {}

  async subscribe(
    dto: CreateNewsletterDto,
    ipAddress: string | undefined
  ): Promise<NewsletterSubscribeResponse> {
    const ipHash = createHash('sha256')
      .update(ipAddress ?? 'unknown')
      .digest('hex');

    const subscriber = await this.prisma.newsletterSubscriber.upsert({
      where: { email: dto.email },
      update: {
        active: true,
        consent: dto.consent,
        ipHash
      },
      create: {
        email: dto.email,
        consent: dto.consent,
        ipHash,
        active: true
      }
    });

    return {
      id: subscriber.id,
      subscribedAt: subscriber.createdAt.toISOString()
    };
  }
}
