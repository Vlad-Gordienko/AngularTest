import { TicketIdPipe } from './ticket-id.pipe';

describe('TicketIdPipe', () => {
  it('create an instance', () => {
    const pipe = new TicketIdPipe();
    expect(pipe).toBeTruthy();
  });
});
