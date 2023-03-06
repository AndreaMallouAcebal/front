import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patrocinador } from 'src/app/models/patrocinador/patrocinador';
import { PatrocinadoresService } from 'src/app/services/patrocinadores/patrocinadores.service';
//ventanas emegentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-patrocinador',
  templateUrl: './registrar-patrocinador.component.html',
  styleUrls: ['./registrar-patrocinador.component.css']
})
export class RegistrarPatrocinadorComponent {
  patrocinador:Patrocinador=new Patrocinador();
  public patrocinadoresForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public patrocinadoresService : PatrocinadoresService
  ) { }
  ngOnInit() {

    this.patrocinadoresForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  guardarPatrocinador(){
    this.patrocinadoresService.savePatrocinador(this.patrocinadoresForm.value).subscribe(dato => {
      Swal.fire('Patrocinador editado con éxito');
      this.patrocinadoresForm.reset();
      this.irALaListaDePatrocinadores();
    },
      error => { console.error(error) }

    );
  }
  irALaListaDePatrocinadores() {
    this.router.navigate(['/patrocinadores']);
  }

  onSubmit(): void {
    this.guardarPatrocinador();
  }

}
