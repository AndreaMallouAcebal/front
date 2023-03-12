import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
usuario:Usuario;

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuariosService
  ){}
  ngOnInit(){
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
}
