import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  animales:Animal[];

  ngOnInit(){
    
  }

}
