import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      fecha: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(600)])
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
