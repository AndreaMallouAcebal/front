import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalesService } from 'src/app/services/animales/animales.service';

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
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      raza: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  guardarAnimal(){
    this.animalesService.saveAnimal(this.animalesForm.value).subscribe(dato => {
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
