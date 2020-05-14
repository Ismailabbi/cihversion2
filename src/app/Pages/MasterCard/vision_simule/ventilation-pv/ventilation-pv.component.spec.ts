import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationPvComponent } from './ventilation-pv.component';

describe('VentilationPvComponent', () => {
  let component: VentilationPvComponent;
  let fixture: ComponentFixture<VentilationPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentilationPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentilationPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
