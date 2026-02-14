import helmet from 'helmet';

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

import { AppModule } from './app.module';
import { ApiExceptionFilter } from './common/filters/api-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');

  app.use(json({ limit: '1mb' }));
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: 'same-site' }
    })
  );

  app.enableCors({
    origin: configService.get<string>('SITE_URL', 'http://localhost:3000'),
    credentials: false,
    methods: ['GET', 'POST']
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );
  app.useGlobalFilters(new ApiExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Globaltechno API')
    .setDescription('Security-first API surface for globaltechno.eu')
    .setVersion(configService.get<string>('APP_VERSION', '1.0.0'))
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const port = configService.get<number>('PORT', 4000);
  await app.listen(port);
}

bootstrap();
