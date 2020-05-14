import { TestBed } from '@angular/core/testing';

import { ElementmasterService } from './elementmaster.service';

describe('ElementmasterService', () => {
  let service: ElementmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
