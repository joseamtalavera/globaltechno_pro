# CLAUDE.md — Globaltechno

## Project Overview
Globaltechno is a technology company specializing in **AI Agents & Automation**.
We build intelligent systems that transform how enterprises operate.
Secondary capabilities: Cybersecurity, Digital Identity, Cloud Computing, Selective Engineering.

## Tech Stack
- **Frontend**: Nuxt 3 (Vue 3 + Composition API) + TypeScript
- **Styling**: Custom CSS design system (no Tailwind) with CSS custom properties
- **Backend**: NestJS 10 (Express platform) + TypeScript
- **Database**: PostgreSQL 16 (via Prisma ORM)
- **Shared**: Zod schemas + TypeScript types in `packages/shared`
- **Deployment**: Docker → AWS ECS (Fargate) via Terraform
- **Package Manager**: pnpm (monorepo with workspaces)

## Design Direction
**Aesthetic**: Premium minimalism with cinematic depth — inspired by sanalabs.com
- Ultra-clean layouts with generous whitespace
- Dark hero sections with light content sections (alternating)
- Big, bold typography — display headings at 4xl-7xl
- Smooth scroll-triggered animations (fade-up, stagger reveals)
- Subtle gradient meshes and grain overlays for depth
- Monochromatic palette with one sharp accent color (electric mint green)

**Typography**: Instrument Serif (display), Satoshi (body), JetBrains Mono (mono)

**Color Palette**:
- `--color-bg-dark: #0A0A0B` | `--color-bg-light: #FAFAF9`
- `--color-accent: #00E5A0` | `--color-accent-hover: #00CC8E`
- `--color-text-primary: #1A1A1A` | `--color-text-secondary: #6B6B6B`

## Architecture (Monorepo)
```
apps/web/          — Nuxt 3 SSR frontend (port 3000)
apps/api/          — NestJS backend (port 4000)
packages/shared/   — Shared Zod schemas, types, DTOs
infra/terraform/   — AWS infrastructure modules
```

## Code Standards
- Use `<script setup lang="ts">` in all Vue components
- Use Composition API exclusively (no Options API)
- Nuxt auto-imports for composables/components (no manual imports)
- Custom CSS with BEM-like naming and CSS custom properties
- Mobile-first responsive design
- WCAG AA accessibility minimum
- Semantic HTML with proper heading hierarchy and aria labels
