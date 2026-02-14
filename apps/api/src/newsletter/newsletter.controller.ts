import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';

import { NewsletterService, type NewsletterSubscribeResponse } from './newsletter.service';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';

@ApiTags('newsletter')
@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  @Throttle({ default: { ttl: 60_000, limit: 5 } })
  @ApiOperation({ summary: 'Subscribe to newsletter' })
  @ApiCreatedResponse({ description: 'Subscribed successfully' })
  async subscribe(
    @Body() payload: CreateNewsletterDto,
    @Req() req: Request
  ): Promise<NewsletterSubscribeResponse> {
    const forwarded = req.headers['x-forwarded-for'];
    const headerIp = typeof forwarded === 'string' ? forwarded.split(',')[0]?.trim() : undefined;

    return this.newsletterService.subscribe(payload, headerIp ?? req.ip);
  }
}
