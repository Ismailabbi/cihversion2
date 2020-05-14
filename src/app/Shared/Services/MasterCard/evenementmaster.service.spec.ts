import { TestBed } from '@angular/core/testing';

import { EvenementmasterService } from './evenementmaster.service';

describe('EvenementmasterService', () => {
  let service: EvenementmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
