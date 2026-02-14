import type { HealthResponse } from '@globaltechno/shared';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService
  ) {}

  async getHealth(): Promise<HealthResponse & { db: 'up' | 'down' }> {
    let db: 'up' | 'down' = 'up';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      db = 'down';
    }

    return {
      status: 'ok',
      uptimeSec: Math.floor(process.uptime()),
      version: this.configService.get<string>('APP_VERSION', '1.0.0'),
      timestamp: new Date().toISOString(),
      db
    };
  }
}
