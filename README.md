# Globaltechno Monorepo

Production-oriented monorepo for Globaltechno OÜ.

## Stack

- `apps/web`: Nuxt 3 SSR frontend
- `apps/api`: NestJS API with Prisma
- `packages/shared`: shared DTOs, types, zod schemas
- `infra`: Terraform modules for AWS ECS Fargate deployment

## Architecture Summary

- Security-first backend with helmet, validation, rate limiting, request-id logging, and structured error envelope.
- SSR frontend with dark minimal design, accessibility defaults, and restrained motion.
- PostgreSQL persistence via Prisma migrations and seed data.
- AWS-first deployment with ALB path routing (`/api/*`), separate ECS services, ECR, IAM roles, CloudWatch logs.

## Prerequisites

- Node.js 22+
- `pnpm` 9+
- Docker + Docker Compose
- Terraform 1.6+ (for infra)

## Environment Setup

1. Copy environment files:
   - `cp .env.example .env`
   - `cp apps/api/.env.example apps/api/.env`
   - `cp apps/web/.env.example apps/web/.env`
2. Ensure `DATABASE_URL` points to local Postgres from compose.

## Local Development

1. Install dependencies:
   - `pnpm install`
2. Start Postgres:
   - `docker compose up -d`
3. Run migrations:
   - `pnpm --filter @globaltechno/api prisma migrate dev`
4. Seed data:
   - `pnpm --filter @globaltechno/api prisma db seed`
5. Start web + api:
   - `pnpm dev`

## Available Services

- Web: `http://localhost:3000`
- API Swagger: `http://localhost:4000/docs`
- API health: `http://localhost:4000/api/health`

## API Endpoints

- `GET /api/health`
- `POST /api/contact`
- `GET /api/case-studies`
- `GET /api/case-studies/:slug`

Error envelope:

```json
{
  "statusCode": 400,
  "error": "BadRequestException",
  "message": "Validation failed",
  "requestId": "uuid",
  "timestamp": "2026-02-14T12:00:00.000Z"
}
```

## Quality Commands

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm --filter @globaltechno/web test:e2e`
- `pnpm build`

## Docker

- Web image: `docker build -f apps/web/Dockerfile .`
- API image: `docker build -f apps/api/Dockerfile .`

## Infrastructure

Terraform modules are in `infra/terraform` and production wiring in `infra/terraform/envs/prod`.

Deployment assumptions:

- Region default: `eu-central-1`
- Primary domain: `globaltechno.eu`
- ALB routes `/api/*` to API service, all other paths to web service
- API secrets sourced from AWS Secrets Manager / SSM

See `infra/README.md` for apply instructions.

## CI/CD

Workflow file: `.github/workflows/ci-cd.yml`

Pipeline stages:

1. Lint, typecheck, tests, build
2. Docker build and push to ECR
3. ECS deployment with task definition image updates
4. Post-deploy health check
