import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('Prisma schema', () => {
  it('contains required models and columns', () => {
    const schema = readFileSync(join(__dirname, '../prisma/schema.prisma'), 'utf-8');

    expect(schema).toContain('model ContactLead');
    expect(schema).toContain('model CaseStudy');
    expect(schema).toContain('@@map("contact_leads")');
    expect(schema).toContain('@@map("case_studies")');
    expect(schema).toContain('ip_hash');
    expect(schema).toContain('published_at');
  });
});
