import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoultionPvComponent } from './evoultion-pv.component';

describe('EvoultionPvComponent', () => {
  let component: EvoultionPvComponent;
  let fixture: ComponentFixture<EvoultionPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoultionPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoultionPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
