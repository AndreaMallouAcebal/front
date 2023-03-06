import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
//ventanas emegentes
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent {
  actividades:Actividad[];
  actividad :Actividad;
  usuario:Usuario;
  usuarios:Usuario[];
  actividadesusuarios:Actividadusuario[];
  actividadusuario: Actividadusuario;
  isAdmin = false;
  isLogged = false;

  constructor(
    public fb: FormBuilder,
    public actividadesService : ActividadesService,
    public actividadesusuariosService : ActividadesusuariosService,
    public usuariosService: UsuariosService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void{
    //Llamamos a los métodos para cargar los arrays con la base de datos
    // this.obtenerUsuarios();
    this.obtenerActividadesUsuarios();
    this.obtenerActividades();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
    
    if(this.tokenService.getAuthorities() === 'ADMIN'){
      this.isAdmin = true;
    }
  }

  //método para cargar los usuarios
  private obtenerUsuarios(){    
    this.usuariosService.getAllUsuarios().subscribe(dato=>{
      this.usuarios= dato;
    });
    this.usuario=this.usuarios[0];
  }

  //método para cargar los usuarios
  private obtenerActividadesUsuarios(){    
    this.actividadesusuariosService.getAllActividadesusuarios().subscribe(dato=>{
      this.actividadesusuarios = dato;
    });
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

  onClickVerUsuarios(id:number){

  }

  onClickApuntarse(id:number){
  
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
