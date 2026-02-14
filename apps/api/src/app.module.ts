import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { CaseStudiesModule } from './case-studies/case-studies.module';
import { LoggingMiddleware } from './common/middleware/logging.middleware';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware';
import { ContactModule } from './contact/contact.module';
import { HealthModule } from './health/health.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 100
      }
    ]),
    PrismaModule,
    HealthModule,
    ContactModule,
    CaseStudiesModule,
    NewsletterModule
  ],
  providers: [
    LoggingMiddleware,
    RequestIdMiddleware,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestIdMiddleware, LoggingMiddleware).forRoutes('*');
  }
}
