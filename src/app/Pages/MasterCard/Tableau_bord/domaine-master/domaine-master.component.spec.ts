import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineMasterComponent } from './domaine-master.component';

describe('DomaineMasterComponent', () => {
  let component: DomaineMasterComponent;
  let fixture: ComponentFixture<DomaineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
