import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  usuario: Usuario;
  router: Router;

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuariosService
  ) { }
  ngOnInit() {
    this.obtenerDatosUsuario();
  }
  private obtenerDatosUsuario() {
    let params = new HttpParams()
      .set('userEmail', this.tokenService.getEmail());
    this.usuarioService.getMyUser(params).subscribe(
      dato => {
        this.usuario = dato;
      });
  }

  onClickConfirmarEliminarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe();
    this.router.navigate(['/']);
    this.tokenService.logOut();
    window.location.reload();

  }

  onClickEliminarUsuario(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro que quiere eliminar su cuenta?',
      text: "¡Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.onClickConfirmarEliminarUsuario(id)
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Su cuenta ha sido eliminada de la base de datos',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Este usuario no se ha eliminado',
          'error'
        )
      }
    })
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['/']);
    window.location.reload();

    
  }
}
