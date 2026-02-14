import type { CaseStudyDetail, CaseStudySummary } from '@globaltechno/shared';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CaseStudiesService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublished(): Promise<CaseStudySummary[]> {
    const records = await this.prisma.caseStudy.findMany({
      where: {
        publishedAt: {
          not: null
        }
      },
      orderBy: {
        publishedAt: 'desc'
      }
    });

    return records.map((item: (typeof records)[number]) => ({
      slug: item.slug,
      title: item.title,
      summary: item.summary,
      industry: item.industry,
      tags: item.tags,
      publishedAt: item.publishedAt?.toISOString() ?? item.createdAt.toISOString()
    }));
  }

  async getBySlug(slug: string): Promise<CaseStudyDetail> {
    const item = await this.prisma.caseStudy.findUnique({
      where: { slug }
    });

    if (!item || !item.publishedAt) {
      throw new NotFoundException('Case study not found');
    }

    return {
      slug: item.slug,
      title: item.title,
      summary: item.summary,
      industry: item.industry,
      tags: item.tags,
      publishedAt: item.publishedAt.toISOString(),
      challenge: item.challenge,
      approach: item.approach,
      outcome: item.outcome
    };
  }
}
