import { TestBed } from '@angular/core/testing';

import { DashbordmasterService } from './dashbordmaster.service';

describe('DashbordmasterService', () => {
  let service: DashbordmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbordmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
