import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfiltreHistoriqueComponent } from './modalfiltre-historique.component';

describe('ModalfiltreHistoriqueComponent', () => {
  let component: ModalfiltreHistoriqueComponent;
  let fixture: ComponentFixture<ModalfiltreHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfiltreHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfiltreHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
