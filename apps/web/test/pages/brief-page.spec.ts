import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('Brief page', () => {
  const content = readFileSync(
    join(__dirname, '../../pages/brief.vue'),
    'utf-8'
  );

  it('drives a 3-step stepper', () => {
    expect(content).toContain('v-if="step === 1"');
    expect(content).toContain('v-else-if="step === 2"');
    expect(content).toContain('v-else-if="step === 3"');
  });

  it('exposes the service-interest options', () => {
    expect(content).toContain("'full-stack'");
    expect(content).toContain("'testing'");
    expect(content).toContain("'architecture'");
    expect(content).toContain("'not-sure'");
    expect(content).toContain("'other'");
  });

  it('posts to /api/contact', () => {
    expect(content).toContain('/contact');
    expect(content).toContain("method: 'POST'");
  });
});
