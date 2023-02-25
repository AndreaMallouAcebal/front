import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Patrocinador } from 'src/app/models/patrocinador/patrocinador';
import { PatrocinadoresService } from 'src/app/services/patrocinadores/patrocinadores.service';

@Component({
  selector: 'app-listar-patrocinadores',
  templateUrl: './listar-patrocinadores.component.html',
  styleUrls: ['./listar-patrocinadores.component.css']
})
export class ListarPatrocinadoresComponent {
  patrocinadores:Patrocinador[];
  patrocinador:Patrocinador;

  constructor(
    public fb: FormBuilder,
    public patrocinadoresService : PatrocinadoresService
  ){}

  ngOnInit(): void{
    this.obtenerPatrocinadores();
  }

  private obtenerPatrocinadores(){
    this.patrocinadoresService.getAllPatrocinadores().subscribe(dato=>{
      this.patrocinadores = dato;
    });
  }


  onClickEliminar(id:number){

    this.patrocinadoresService.deletePatrocinador(id).subscribe(
      patrocinadores=> this.patrocinadores= this.patrocinadores.filter(p=>p.id!==id)
    );
  }




}
