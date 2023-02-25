
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Animal } from 'src/app/models/animal/animal';
import { Cita } from 'src/app/models/cita/cita';
import { AnimalesService } from 'src/app/services/animales/animales.service';
import { CitasService } from 'src/app/services/citas/citas.service';

@Component({
  selector: 'app-listar-animales',
  templateUrl: './listar-animales.component.html',
  styleUrls: ['./listar-animales.component.css']
})
export class ListarAnimalesComponent implements OnInit {
  animales:Animal[];
  animal :Animal;
  citas:Cita[];
  constructor(
    public fb: FormBuilder,
    public animalesService : AnimalesService,
    public citasService : CitasService
  ){}

  ngOnInit(): void{
    //cargamos las citas
    this.citasService.getAllCitas().subscribe(dato=>{
      this.citas = dato;
    });

    this.obtenerAnimales();
  }

  private obtenerAnimales(){
    this.animalesService.getAllAnimales().subscribe(dato=>{
      this.animales = dato;
    });
  }


  onClickEliminar(id:number){
  
     //guardamos las citas que tiene el animal
     this.citas=this.citas.filter(c=>c.animal.id=id)
    if(this.citas.length>1){
      this.citas.forEach(c=>
      this.citasService.deleteCita(c.id)
      )
    }
    this.animalesService.deleteAnimal(id).subscribe(
      animales=> this.animales= this.animales.filter(ani=>ani.id!==id)
    );
  }




}
