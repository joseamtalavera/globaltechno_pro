-- AlterTable: add nullable service_interest column to contact_leads
ALTER TABLE "contact_leads" ADD COLUMN "service_interest" VARCHAR(40);
