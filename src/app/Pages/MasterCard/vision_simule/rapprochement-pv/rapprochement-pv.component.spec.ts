import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapprochementPvComponent } from './rapprochement-pv.component';

describe('RapprochementPvComponent', () => {
  let component: RapprochementPvComponent;
  let fixture: ComponentFixture<RapprochementPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapprochementPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapprochementPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
