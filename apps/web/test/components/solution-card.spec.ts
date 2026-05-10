import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('SolutionCard component', () => {
  const content = readFileSync(
    join(__dirname, '../../components/shared/SolutionCard.vue'),
    'utf-8'
  );

  it('exposes the expected props', () => {
    expect(content).toContain('number: string');
    expect(content).toContain('title: string');
    expect(content).toContain('description: string');
    expect(content).toContain("status: 'now' | 'coming'");
  });

  it('renders the status pill driven by the status prop', () => {
    expect(content).toContain('class="pill"');
    expect(content).toContain(':class="`pill--${status}`"');
  });
});
