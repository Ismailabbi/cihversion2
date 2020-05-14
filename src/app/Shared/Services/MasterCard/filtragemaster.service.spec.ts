import { TestBed } from '@angular/core/testing';

import { FiltragemasterService } from './filtragemaster.service';

describe('FiltragemasterService', () => {
  let service: FiltragemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltragemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
