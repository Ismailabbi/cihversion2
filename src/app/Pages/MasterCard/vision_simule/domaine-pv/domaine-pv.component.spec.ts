import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainePvComponent } from './domaine-pv.component';

describe('DomainePvComponent', () => {
  let component: DomainePvComponent;
  let fixture: ComponentFixture<DomainePvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainePvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainePvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
