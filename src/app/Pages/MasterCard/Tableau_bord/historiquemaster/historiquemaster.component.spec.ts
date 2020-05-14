import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquemasterComponent } from './historiquemaster.component';

describe('HistoriquemasterComponent', () => {
  let component: HistoriquemasterComponent;
  let fixture: ComponentFixture<HistoriquemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
