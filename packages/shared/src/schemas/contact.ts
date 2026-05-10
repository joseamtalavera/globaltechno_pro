import { z } from 'zod';

export const SERVICE_INTERESTS = [
  'full-stack',
  'testing',
  'architecture',
  'not-sure',
  'other'
] as const;

export const serviceInterestSchema = z.enum(SERVICE_INTERESTS);
export type ServiceInterest = z.infer<typeof serviceInterestSchema>;

export const contactLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(120).optional(),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(20).max(2000),
  consent: z.literal(true),
  serviceInterest: serviceInterestSchema.optional()
});

export type ContactLeadSchema = z.infer<typeof contactLeadSchema>;
