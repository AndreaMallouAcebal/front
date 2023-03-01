import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal';
import { Patrocinador } from 'src/app/models/patrocinador/patrocinador';
import { AnimalesService } from 'src/app/services/animales/animales.service';
import { PatrocinadoresService } from 'src/app/services/patrocinadores/patrocinadores.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  animales:Animal[]=[];
  patrocinadores:Patrocinador[]=[];

  constructor(
    private animalesService: AnimalesService,
    private patrocinadoresService:PatrocinadoresService
    ){}

  ngOnInit(){
    this.obtenerAnimales();
    this.obtenerPatrocinadores();
    console.log(this.animales)
  }

  obtenerAnimales(){

      this.animalesService.getAnimalId(1).subscribe(dato=>
        this.animales.push(dato)
      );
    
   this.animalesService.getAnimalId(2).subscribe(dato=>
     this.animales.push(dato)
   );
   this.animalesService.getAnimalId(3).subscribe(dato=>
     this.animales.push(dato)
   );
    }

    obtenerPatrocinadores(){
      this.patrocinadoresService.getAllPatrocinadores().subscribe(dato=>
        this.patrocinadores=dato
      );
    }

    onClickEliminarAnimal(id:number){

     this.animalesService.deleteAnimal(id).subscribe(
       animales=> this.animales= this.animales.filter(ani=>ani.id!==id),
       
     );
   }
   onClickEliminarPatrocinador(id:number){
    this.patrocinadoresService.deletePatrocinador(id).subscribe(
      patrocinadores=> this.patrocinadores= this.patrocinadores.filter(p=>p.id!==id),
    );
  }
}
