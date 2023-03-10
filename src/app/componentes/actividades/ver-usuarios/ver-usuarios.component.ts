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

    //asignamos al objeto animal los datos enviando el id recuperado
    this.actividadesService.getActividadId(this.id).subscribe(
      res => { this.actividad = res },
      err => console.log(err)
    );
    console.log(this.actividad)

    //recuperamos todas las actividadesusuario
    this.actividadesUsuariosService.getAllActividadesusuarios().subscribe(
      res => { this.actividadesusuarios = res },
      err => console.log(err)
    );


    //filtramos usuariosactividades
   this.actividadesusuarios = this.actividadesusuarios.filter(
       a => a.actividad.id = this.id,
   )
    
    let id;
    //filtramos usuarios
    for (let i = 0; i < this.actividadesusuarios.length; i++) {

      id = this.actividadesusuarios[i].usuario.id
      this.usuariosService.getUsuariolId(id).subscribe(
        p => { this.usuarios.push(p)},
        err => console.log(err)
      )
    }
  }
}

