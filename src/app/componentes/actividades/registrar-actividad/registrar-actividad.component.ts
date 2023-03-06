import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad/actividad';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
//ventanas emegentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-actividad',
  templateUrl: './registrar-actividad.component.html',
  styleUrls: ['./registrar-actividad.component.css']
})
export class RegistrarActividadComponent {
  actividad:Actividad=new Actividad();
  public actividadesForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public actividadesService : ActividadesService
  ) { }
  ngOnInit() {

    this.actividadesForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  guardarActividad(){
    this.actividadesService.saveActividad(this.actividadesForm.value).subscribe(dato => {
      Swal.fire('Actividad guardada con éxito')
      this.actividadesForm.reset();
      this.irALaListaDeActividades();
    },
      error => { console.error(error) }

    );
  }
  irALaListaDeActividades() {
    this.router.navigate(['/actividades']);
  }

  onSubmit(): void {
    this.guardarActividad();
  }

}
