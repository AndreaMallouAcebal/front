import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';
import { TokenService } from 'src/app/services/seguridad/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent {
  //recuperamos el id de la url 
  id: number = this.activateRouter.snapshot.params['id'];
  actividadesusuarios: Actividadusuario[];
  actividad: Actividad;
  usuarios: Usuario[];
  aus:Actividadusuario[];

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public usuariosService: UsuariosService,
    public actividadesService: ActividadesService,
    public actividadesUsuariosService: ActividadesusuariosService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {

     this.actividadesService.getActividadId(this.id).subscribe(
       res => { this.actividad = res },
       err => console.log(err)
     );
     console.log(this.actividad)

    //recuperamos todas las actividadesusuario
    this.actividadesUsuariosService.getAllActividadesusuariosByActividad(this.id).subscribe(
      res => { this.actividadesusuarios = res },
      err => console.log(err)
    );
    console.log(this.actividadesusuarios)
  }
}

