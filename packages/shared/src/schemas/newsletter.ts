import { z } from 'zod';

export const newsletterSubscribeSchema = z.object({
  email: z.string().trim().email('A valid email is required').max(255),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required' })
  })
});

export type NewsletterSubscribeInput = z.infer<typeof newsletterSubscribeSchema>;
