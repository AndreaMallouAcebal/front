import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

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

  constructor(
    public fb: FormBuilder,
    public actividadesService : ActividadesService,
    public actividadesusuariosService : ActividadesusuariosService,
    public usuariosService: UsuariosService
  ){}

  ngOnInit(): void{
    //Llamamos a los métodos para cargar los arrays con la base de datos
    // this.obtenerUsuarios();
    this.obtenerActividadesUsuarios();
    this.obtenerActividades();
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

  onClickEliminarActividad(id:number){

    this.actividadesService.deleteActividad(id).subscribe(
      actividades=> this.actividades= this.actividades.filter(a=>a.id!==id)
    );
  }

  onClickVerUsuarios(id:number){

  }

  onClickApuntarse(id:number){
  
  }
}
