import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('API integration', () => {
  let app: INestApplication;

  const prismaMock: Partial<PrismaService> = {
    $queryRaw: jest.fn().mockResolvedValue([{ ok: 1 }]),
    contactLead: {
      create: jest.fn().mockResolvedValue({
        id: 'lead_123',
        createdAt: new Date('2026-02-01T10:00:00.000Z')
      })
    } as any,
    caseStudy: {
      findMany: jest.fn().mockResolvedValue([
        {
          slug: 'identity-fabric-for-regulated-fintech',
          title: 'Identity Fabric for a Regulated Fintech Operator',
          summary: 'Summary',
          industry: 'Financial Services',
          tags: ['AWS'],
          publishedAt: new Date('2025-11-20T10:00:00.000Z'),
          createdAt: new Date('2025-11-20T10:00:00.000Z')
        }
      ]),
      findUnique: jest.fn().mockResolvedValue({
        slug: 'identity-fabric-for-regulated-fintech',
        title: 'Identity Fabric for a Regulated Fintech Operator',
        summary: 'Summary',
        industry: 'Financial Services',
        tags: ['AWS'],
        challenge: 'Challenge',
        approach: 'Approach',
        outcome: 'Outcome',
        publishedAt: new Date('2025-11-20T10:00:00.000Z'),
        createdAt: new Date('2025-11-20T10:00:00.000Z')
      })
    } as any
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /api/health', async () => {
    const response = await request(app.getHttpServer()).get('/api/health').expect(200);
    expect(response.body.status).toBe('ok');
  });

  it('POST /api/contact', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/contact')
      .set('x-forwarded-for', '203.0.113.100')
      .send({
        name: 'Jane Operator',
        company: 'Globaltechno OÜ',
        email: 'jane@example.com',
        message: 'We require a secure architecture review for identity and workload isolation.',
        consent: true
      })
      .expect(201);

    expect(response.body.id).toBe('lead_123');
  });

  it('GET /api/case-studies', async () => {
    const response = await request(app.getHttpServer()).get('/api/case-studies').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(1);
  });

  it('GET /api/case-studies/:slug', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/case-studies/identity-fabric-for-regulated-fintech')
      .expect(200);

    expect(response.body.slug).toBe('identity-fabric-for-regulated-fintech');
  });
});
