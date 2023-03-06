import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal/animal';
import { Cita } from 'src/app/models/cita/cita';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AnimalesService } from 'src/app/services/animales/animales.service';
import { CitasService } from 'src/app/services/citas/citas.service';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-detalles-animal',
  templateUrl: './detalles-animal.component.html',
  styleUrls: ['./detalles-animal.component.css']
})
export class DetallesAnimalComponent {
  //recuperamos el id de la url 
  //id:number=parseInt(window.location.pathname.substr(0).split('/')[2]);
  id: number = this.activateRouter.snapshot.params['id'];
  animal: Animal = new Animal();
  public animalesForm: FormGroup;
  cita: Cita = new Cita();
  public citasForm: FormGroup;
  usuario: Usuario;
  email:string;
  isLogged = false;


  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public usuariosService: UsuariosService,
    public animalesService: AnimalesService,
    public citasService: CitasService,
    private tokenService: TokenService
  ) { }
  ngOnInit() {

    //asignamos al objeto animal los datos enviando el id recuperado
    this.animalesService.getAnimalId(this.id).subscribe(
      res => { this.animal = res },
      err => console.log(err)
    );

    this.animalesForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      raza: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      tipo: ['', Validators.required],
    });

    this.citasForm = this.fb.group({
      fecha: ['', Validators.required],
      animal_id: ['', Validators.required],
      usuario_id: ['', Validators.required]
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

  }

  guardarCita() {
    this.email = this.tokenService.getEmail();
    this.setAnimalCita();
    this.citasService.saveCitaWithEmail(this.cita, this.email).subscribe(
      error => { console.error(error) }
    );
    this.irALaListaDeAnimales();
  }

  irALaListaDeAnimales() {
    this.router.navigate(['/animales']);
  }

  setAnimalCita() {
    this.cita.animal = this.animal;
  }

  onSubmit(): void {

  }

}
