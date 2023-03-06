import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal/animal';
import { Cita } from 'src/app/models/cita/cita';
import { AnimalesService } from 'src/app/services/animales/animales.service';
import { CitasService } from 'src/app/services/citas/citas.service';
//ventanas emegentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.component.html',
  styleUrls: ['./editar-animal.component.css']
})
export class EditarAnimalComponent {
  //recuperamos el id de la url 
  //id:number=parseInt(window.location.pathname.substr(0).split('/')[2]);
  id:number=this.activateRouter.snapshot.params['id'];
  animal:Animal=new Animal();
  citas: Cita[]=[];
  public animalesForm: FormGroup;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public animalesService : AnimalesService,
    public citasService : CitasService
  ) { }
  ngOnInit() {

    //cargamos las citas
    this.citasService.getAllCitas().subscribe(dato=>{
      this.citas = dato;
    });

    //guardamos las citas que tiene el animal
    this.citas=this.citas.filter(c=>c.animal.id=this.id)

    //asignamos al objeto animal los datos enviando el id recuperado
    this.animalesService.getAnimalId(this.id).subscribe(
      res=>{ this.animal=res},
      err=>console.log(err)
    );

    this.animalesForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      raza: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  guardarAnimal(animal : Animal){
    this.animalesService.updateAnimal(animal).subscribe(dato => {
      Swal.fire('Animal editado con exito')
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

  }


}
