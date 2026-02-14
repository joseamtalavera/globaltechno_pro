import { describe, expect, it } from 'vitest';

import { contactLeadSchema } from '../src/schemas/contact';

describe('contactLeadSchema', () => {
  it('accepts valid payload', () => {
    const parsed = contactLeadSchema.parse({
      name: 'Ada Lovelace',
      company: 'Globaltechno OÜ',
      email: 'ada@example.com',
      message: 'We need a secure AI automation platform for internal workflows.',
      consent: true
    });

    expect(parsed.email).toBe('ada@example.com');
  });
});
