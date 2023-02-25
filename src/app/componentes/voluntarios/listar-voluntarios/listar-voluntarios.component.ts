import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Voluntario } from 'src/app/models/voluntario/voluntario';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';

@Component({
  selector: 'app-listar-voluntarios',
  templateUrl: './listar-voluntarios.component.html',
  styleUrls: ['./listar-voluntarios.component.css']
})
export class ListarVoluntariosComponent {

voluntarios: Voluntario[];
voluntario : Voluntario;
  
  constructor(
    public fb: FormBuilder,
    public voluntariosServices : VoluntariosService
  ) { }

  ngOnInit(): void {
    this.obtenerVoluntarios();
  }

  private obtenerVoluntarios() {
    this.voluntariosServices.getAllVoluntarios().subscribe(dato => {
      this.voluntarios = dato;
    });
    console.log(this.voluntarios);
  }


  onClickEliminar(id: number) {
    this.voluntariosServices.deleteVoluntario(id).subscribe(
      voluntarios => this.voluntarios = this.voluntarios.filter(v => v.id !== id)
    );
  }
}
