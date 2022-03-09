import { TestBed } from '@angular/core/testing';

import { PetsAndUsersService } from './pets-and-users.service';

describe('PetsAndUsersService', () => {
  let service: PetsAndUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsAndUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
