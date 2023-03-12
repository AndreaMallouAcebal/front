import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-actividad',
  templateUrl: './detalles-actividad.component.html',
  styleUrls: ['./detalles-actividad.component.css']
})
export class DetallesActividadComponent {
  //recuperamos el id de la url 
  id: number = this.activateRouter.snapshot.params['id'];
  actividadesusuarios: Actividadusuario[];
  actividad: Actividad;
  usuarios: Usuario[];
  aus:Actividadusuario[];
  actividades:Actividad[];
  usuario:Usuario;
  actividadusuario: Actividadusuario;
  isAdmin = false;
  isLogged = false;
  isApuntado = false;
  email : string;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public usuariosService: UsuariosService,
    public actividadesService: ActividadesService,
    public actividadesUsuariosService: ActividadesusuariosService,
    private tokenService: TokenService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {

     this.actividadesService.getActividadId(this.id).subscribe(
       res => { this.actividad = res },
       err => console.log(err)

       );


    //recuperamos todas las actividadesusuario
    this.actividadesUsuariosService.getAllActividadesusuariosByActividad(this.id).subscribe(
      res => { this.actividadesusuarios = res;
        for(var au of this.actividadesusuarios){
          console.log(au.usuario.email);
          if(au.usuario.email === this.email){
            this.isApuntado = true;
          }
        } },
      err => console.log(err)
    );
    this.email = this.tokenService.getEmail();

    //Llamamos a los métodos para cargar los arrays con la base de datos
    // this.obtenerUsuarios();
    // this.obtenerActividadesUsuarios();
    this.obtenerActividades();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
    
    if(this.tokenService.getAuthorities() === 'ADMIN'){
      this.isAdmin = true;
    }

    console.log(this.email);

  }
  
  //método para cargar las actividades
  private obtenerActividades(){
    this.actividadesService.getAllActividades().subscribe(dato=>{
      this.actividades = dato;
    });
  }

  onClickConfirmarEliminarActividad(id:number){
    this.actividadesService.deleteActividad(id).subscribe(
      actividades=> this.actividades= this.actividades.filter(a=>a.id!==id)
    );
  }

  confirmarApuntarse(id: number ){
    let params = new HttpParams()
      .set('userEmail', this.email)
      .set('idActividad', id);
    this.actividadesUsuariosService.saveActividadWithEmail(params).subscribe(
      error => { console.error(error) }
    );
    this.irALaListaDeActividades(); 
  }

  irALaListaDeActividades() {
    this.router.navigate(['/actividades']);
  }

  onClickDesapuntarse(id: number) {
    this.actividadesUsuariosService.deleteActividadusuario(id).subscribe(
    error => { console.error(error) }
    );
    this.irALaListaDeActividades(); 
  }


  onClickApuntarse(id: number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que quiere apuntarse a esta actividad?',
      text: 'Rogamos compromiso con las actividades solicitadas',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, confirmar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmarApuntarse(id)
        swalWithBootstrapButtons.fire(
          '¡Está apuntado a esta actividad!',
          'Muchas gracias por su interés',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Ha cancelado la solicitud para apuntarse',
          'error'
        )
      }
    })
  }

  onClickEliminarActividad(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que quiere eliminar esta actividad?',
      text: "¡Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.onClickConfirmarEliminarActividad(id)
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Esta actividad ha sido eliminada de la base de datos',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'La actividad no se ha eliminado',
          'error'
        )
      }
    })
  }
}
