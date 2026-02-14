import type { ContactSubmitResponse } from '@globaltechno/shared';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';

import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Throttle({ default: { ttl: 60_000, limit: 10 } })
  @ApiOperation({ summary: 'Capture contact lead' })
  @ApiCreatedResponse({ description: 'Lead received' })
  async createContact(
    @Body() payload: CreateContactDto,
    @Req() req: Request
  ): Promise<ContactSubmitResponse> {
    const forwarded = req.headers['x-forwarded-for'];
    const headerIp = typeof forwarded === 'string' ? forwarded.split(',')[0]?.trim() : undefined;

    return this.contactService.createLead(payload, headerIp ?? req.ip, req.get('user-agent'));
  }
}
