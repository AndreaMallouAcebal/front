import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Actividad } from 'src/app/models/actividad/actividad';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';
import { ActividadesService } from 'src/app/services/actividades/actividades.service';
import { ActividadesusuariosService } from 'src/app/services/actividadesusuarios/actividadesusuarios.service';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent {
  actividades:Actividad[];
  actividad :Actividad;
  // actividadusuario:Actividadusuario[];
  //usuarios: Usuario[];
  constructor(
    public fb: FormBuilder,
    public actividadesService : ActividadesService,
    public actividadesusuarioService : ActividadesusuariosService,
   // public usuarioService : UsuariosService
  ){}

  ngOnInit(): void{
    //cargamos las citas
    // this.actividadesusuarioService.getAllActividadesusuarios().subscribe(dato=>{
    //   this.actividadusuario = dato;
    // });

    this.obtenerActividades();
  }

  private obtenerActividades(){
    this.actividadesService.getAllActividades().subscribe(dato=>{
      this.actividades = dato;
    });
  }


  onClickEliminar(id:number){

    this.actividadesService.deleteActividad(id).subscribe(
      actividades=> this.actividades= this.actividades.filter(a=>a.id!==id)
    );
  }




}
