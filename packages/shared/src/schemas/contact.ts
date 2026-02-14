import { z } from 'zod';

export const contactLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(120).optional(),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(20).max(2000),
  consent: z.literal(true)
});

export type ContactLeadSchema = z.infer<typeof contactLeadSchema>;
