import { TestBed } from '@angular/core/testing';

import { FiltragevisaService } from './filtragevisa.service';

describe('FiltragevisaService', () => {
  let service: FiltragevisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltragevisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
