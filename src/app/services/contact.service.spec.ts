import { TestBed } from '@angular/core/testing';

import { Contact.ServiceService } from './contact.service.service';

describe('Contact.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Contact.ServiceService = TestBed.get(Contact.ServiceService);
    expect(service).toBeTruthy();
  });
});
