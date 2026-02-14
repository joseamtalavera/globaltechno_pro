CREATE TABLE "contact_leads" (
  "id" TEXT NOT NULL,
  "name" VARCHAR(120) NOT NULL,
  "company" VARCHAR(120),
  "email" VARCHAR(255) NOT NULL,
  "message" TEXT NOT NULL,
  "consent" BOOLEAN NOT NULL,
  "ip_hash" VARCHAR(64) NOT NULL,
  "user_agent" VARCHAR(512) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "contact_leads_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "case_studies" (
  "id" TEXT NOT NULL,
  "slug" VARCHAR(180) NOT NULL,
  "title" VARCHAR(220) NOT NULL,
  "summary" VARCHAR(500) NOT NULL,
  "industry" VARCHAR(140) NOT NULL,
  "challenge" TEXT NOT NULL,
  "approach" TEXT NOT NULL,
  "outcome" TEXT NOT NULL,
  "tags" TEXT[] NOT NULL,
  "published_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "case_studies_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "case_studies_slug_key" ON "case_studies"("slug");
CREATE INDEX "idx_case_studies_published_at" ON "case_studies"("published_at");
CREATE INDEX "idx_contact_leads_created_at" ON "contact_leads"("created_at");
