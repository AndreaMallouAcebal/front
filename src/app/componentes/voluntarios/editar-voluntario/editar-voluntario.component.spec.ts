import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVoluntarioComponent } from './editar-voluntario.component';

describe('EditarVoluntaioComponent', () => {
  let component: EditarVoluntarioComponent;
  let fixture: ComponentFixture<EditarVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
