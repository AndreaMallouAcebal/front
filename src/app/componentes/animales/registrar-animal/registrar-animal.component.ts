import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal/animal';
import { AnimalesService } from 'src/app/services/animales/animales.service';
//ventanas emegentes
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-animal',
  templateUrl: './registrar-animal.component.html',
  styleUrls: ['./registrar-animal.component.css']
})
export class RegistrarAnimalComponent {
animal:Animal=new Animal();
  public animalesForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public animalesService : AnimalesService
  ) { }
  ngOnInit() {

    this.animalesForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
      raza:  new FormControl('', [Validators.required, Validators.maxLength(30)]),
      descripcion:  new FormControl('', [Validators.required, Validators.maxLength(150)]),
      imagen:  new FormControl('', [Validators.required]),
      tipo:  new FormControl('', [Validators.required, Validators.maxLength(45)]),
    });
  }

  guardarAnimal(){
    this.animalesService.saveAnimal(this.animalesForm.value).subscribe(dato => {
      Swal.fire('Animal guardado con éxito');
      this.animalesForm.reset();
      this.irALaListaDeAnimales();
    },
      error => { console.error(error) }

    );
  }
  irALaListaDeAnimales() {
    this.router.navigate(['/animales']);
  }

  onSubmit(): void {
    this.guardarAnimal();
  }

}
