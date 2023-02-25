import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cita } from 'src/app/models/cita/cita';
import { CitasService } from 'src/app/services/citas/citas.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent {

  citas: Cita[];
  cita: Cita;
  
  constructor(
    public fb: FormBuilder,
    public citasService: CitasService
  ) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  private obtenerCitas() {
    this.citasService.getAllCitas().subscribe(dato => {
      this.citas = dato;
      console.log(this.citas);
    });
  }


  onClickEliminar(id: number) {
    this.citasService.deleteCita(id).subscribe(
      citas => this.citas = this.citas.filter(c => c.id !== id)
    );
  }
}
