import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cita } from 'src/app/models/cita/cita';
import { Usuario } from 'src/app/models/usuario/usuario';
import { CitasService } from 'src/app/services/citas/citas.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {

  usuarios:Usuario[];
  usuario :Usuario;
  citas:Cita[];
  constructor(
    public fb: FormBuilder,
    public usuariosService : UsuariosService,
    public citasService : CitasService
  ){}

  ngOnInit(): void{
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuariosService.getAllUsuarios().subscribe(dato=>{
      this.usuarios = dato;
    });
  }

  onClickEliminar(id:number){

    this.usuariosService.deleteUsuario(id).subscribe(
      usuarios=> this.usuarios= this.usuarios.filter(u=>u.id!==id)
    );
  }
}
