import { describe, expect, it } from 'vitest';

import { contactLeadSchema, SERVICE_INTERESTS } from '../src/schemas/contact';

describe('contactLeadSchema', () => {
  it('accepts valid payload without serviceInterest', () => {
    const parsed = contactLeadSchema.parse({
      name: 'Ada Lovelace',
      company: 'Globaltechno OÜ',
      email: 'ada@example.com',
      message: 'We need help shipping a production-grade application end-to-end.',
      consent: true
    });

    expect(parsed.email).toBe('ada@example.com');
    expect(parsed.serviceInterest).toBeUndefined();
  });

  it('accepts valid payload with serviceInterest', () => {
    const parsed = contactLeadSchema.parse({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'We need help shipping a production-grade application end-to-end.',
      consent: true,
      serviceInterest: 'full-stack'
    });

    expect(parsed.serviceInterest).toBe('full-stack');
  });

  it.each(SERVICE_INTERESTS)('accepts each enum value: %s', value => {
    const parsed = contactLeadSchema.parse({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'We need help shipping a production-grade application end-to-end.',
      consent: true,
      serviceInterest: value
    });

    expect(parsed.serviceInterest).toBe(value);
  });

  it('rejects unknown serviceInterest', () => {
    const result = contactLeadSchema.safeParse({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'We need help shipping a production-grade application end-to-end.',
      consent: true,
      serviceInterest: 'cybersecurity'
    });

    expect(result.success).toBe(false);
  });
});
