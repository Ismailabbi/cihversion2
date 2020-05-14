import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePvComponent } from './historique-pv.component';

describe('HistoriquePvComponent', () => {
  let component: HistoriquePvComponent;
  let fixture: ComponentFixture<HistoriquePvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquePvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
