import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoultionmasterComponent } from './evoultionmaster.component';

describe('EvoultionmasterComponent', () => {
  let component: EvoultionmasterComponent;
  let fixture: ComponentFixture<EvoultionmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoultionmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoultionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
