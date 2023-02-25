import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVoluntarioComponent } from './registrar-voluntario.component';

describe('RegistrarVoluntarioComponent', () => {
  let component: RegistrarVoluntarioComponent;
  let fixture: ComponentFixture<RegistrarVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
