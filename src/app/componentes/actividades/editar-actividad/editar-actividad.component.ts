import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
//ventanas emegentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent {
  id: number = this.activateRouter.snapshot.params['id'];
  actividad: Actividad = new Actividad();
  usuarios: Usuario[];
  actividadesusuarios: Actividadusuario[];
  public actividadesForm: FormGroup;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    public actividadesService: ActividadesService,
    public actividadesusuariosService: ActividadesusuariosService,
    public usuariosService: UsuariosService
  ) { }
  ngOnInit() {
    //asignamos al objeto animal los datos enviando el id recuperado
    this.actividadesService.getActividadId(this.id).subscribe(
      res => { this.actividad = res },
      err => console.log(err)
    );


    this.actividadesForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    // this.recuperarusuarios();
  }

  guardarActividad(actividad: Actividad) {
    this.actividadesService.updateActividad(actividad).subscribe(dato => {
      Swal.fire('Actividad editada con éxito')
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

  }

  // recuperarusuarios(){
  //        //cargamos los usarios
  //        this.usuariosService.getAllUsuarios().subscribe(dato => {
  //          this.usuarios = dato;
  //        });

    
  //        //cargamos los actividadesusuarios
  //        this.actividadesusuariosService.getAllActividadesusuarios().subscribe(dato => {
  //          this.actividadesusuarios = dato;
  //        });

    
  //        //guardamos las actividadesusuarios que tiene la actividad
  //         this.actividadesusuarios = this.actividadesusuarios.filter(c => c.actividad.id = this.id)
  //         console.log(this.actividadesusuarios)
    
  // }
}
