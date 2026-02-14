import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

describe('Contact page', () => {
  it('includes contact form component', () => {
    const content = readFileSync(join(__dirname, '../../pages/contact.vue'), 'utf-8');

    expect(content).toContain('<ContactForm />');
  });
});
