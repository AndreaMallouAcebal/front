
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { bindCallback } from 'rxjs';
import { Animal } from 'src/app/models/animal/animal';
import { Cita } from 'src/app/models/cita/cita';
import { AnimalesService } from 'src/app/services/animales/animales.service';
import { CitasService } from 'src/app/services/citas/citas.service';
import { TokenService } from 'src/app/services/seguridad/token.service';

@Component({
  selector: 'app-listar-animales',
  templateUrl: './listar-animales.component.html',
  styleUrls: ['./listar-animales.component.css']
})
export class ListarAnimalesComponent implements OnInit {
  animales:Animal[];
  animal :Animal;
  citas:Cita[];
  isAdmin = false; 
  constructor(
    public fb: FormBuilder,
    public animalesService : AnimalesService,
    public citasService : CitasService,
    private tokenService : TokenService
  ){}

  ngOnInit(): void{
    //cargamos las citas
    this.citasService.getAllCitas().subscribe(dato=>{
      this.citas = dato;
    });
    if(this.tokenService.getAuthorities() === 'ADMIN'){
      this.isAdmin = true;
    }
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
      animales=> this.animales= this.animales.filter(ani=>ani.id!==id),
      
    );
  }

  onClickGatos(){  
  this.animales=this.animales.filter(animales=>animales.tipo=="gato");
}

onClickPerros(){
 async function getanimales(this: any){
      await this.obtenerAnimales();
    }
  this.animales=this.animales.filter(animales=>animales.tipo=="perro");
}

}
