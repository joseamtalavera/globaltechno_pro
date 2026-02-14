import type { CaseStudyDetail, CaseStudySummary } from '@globaltechno/shared';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { CaseStudiesService } from './case-studies.service';

@ApiTags('case-studies')
@Controller('case-studies')
export class CaseStudiesController {
  constructor(private readonly caseStudiesService: CaseStudiesService) {}

  @Get()
  @ApiOperation({ summary: 'List published case studies' })
  @ApiOkResponse({ description: 'Published case studies' })
  async list(): Promise<CaseStudySummary[]> {
    return this.caseStudiesService.listPublished();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get case study by slug' })
  @ApiParam({ name: 'slug', example: 'identity-fabric-for-regulated-fintech' })
  @ApiOkResponse({ description: 'Case study detail' })
  async detail(@Param('slug') slug: string): Promise<CaseStudyDetail> {
    return this.caseStudiesService.getBySlug(slug);
  }
}
