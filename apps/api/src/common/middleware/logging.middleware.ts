import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const startedAt = Date.now();

    res.on('finish', () => {
      const latencyMs = Date.now() - startedAt;
      const requestId = req.requestId ?? 'missing-request-id';
      const path = req.originalUrl || req.url;
      this.logger.log(`${req.method} ${path} ${res.statusCode} ${latencyMs}ms req=${requestId}`);
    });

    next();
  }
}
