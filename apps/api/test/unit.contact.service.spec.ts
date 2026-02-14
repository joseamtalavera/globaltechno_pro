import { ContactService } from '../src/contact/contact.service';

describe('ContactService', () => {
  it('hashes IP and returns response envelope', async () => {
    const create = jest.fn().mockResolvedValue({
      id: 'lead_1',
      createdAt: new Date('2026-01-01T00:00:00.000Z')
    });

    const prisma = {
      contactLead: { create }
    } as any;

    const service = new ContactService(prisma);

    const result = await service.createLead(
      {
        name: 'John Doe',
        company: 'ACME',
        email: 'john@example.com',
        message: 'We need support for secure cloud migration and identity controls.',
        consent: true
      },
      '127.0.0.1',
      'unit-test'
    );

    expect(create).toHaveBeenCalledTimes(1);
    expect(create.mock.calls[0][0].data.ipHash).toHaveLength(64);
    expect(result).toEqual({ id: 'lead_1', receivedAt: '2026-01-01T00:00:00.000Z' });
  });
});
