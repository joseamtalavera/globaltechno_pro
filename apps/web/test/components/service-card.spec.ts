import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

describe('ServiceCard component', () => {
  it('contains expected template structure', () => {
    const content = readFileSync(
      join(__dirname, '../../components/shared/ServiceCard.vue'),
      'utf-8'
    );

    expect(content).toContain('class="service-card"');
    expect(content).toContain('<h3 class="service-card__title">{{ title }}</h3>');
    expect(content).toContain('<p class="service-card__description">{{ description }}</p>');
    expect(content).toContain('Learn more');
  });
});
