import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetableComponent } from './servicetable.component';

describe('ServicetableComponent', () => {
  let component: ServicetableComponent;
  let fixture: ComponentFixture<ServicetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
