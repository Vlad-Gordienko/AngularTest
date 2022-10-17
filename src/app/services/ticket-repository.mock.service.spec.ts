import { TestBed } from '@angular/core/testing';

import { TicketRepositoryMockService } from './ticket-repository.mock.service';

describe('TicketRepositoryMockService', () => {
  let service: TicketRepositoryMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketRepositoryMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
