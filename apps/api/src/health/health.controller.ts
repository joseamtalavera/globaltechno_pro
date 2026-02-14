import type { HealthResponse } from '@globaltechno/shared';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { HealthService } from './health.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Service health and database liveness' })
  @ApiOkResponse({ description: 'Service healthy' })
  async getHealth(): Promise<HealthResponse & { db: 'up' | 'down' }> {
    return this.healthService.getHealth();
  }
}
