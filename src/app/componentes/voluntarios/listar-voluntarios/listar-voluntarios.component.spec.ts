import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVoluntariosComponent } from './listar-voluntarios.component';

describe('ListarVoluntariosComponent', () => {
  let component: ListarVoluntariosComponent;
  let fixture: ComponentFixture<ListarVoluntariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVoluntariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
