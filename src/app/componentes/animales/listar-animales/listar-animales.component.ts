import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalesService } from 'src/app/services/animales/animales.service';

@Component({
  selector: 'app-listar-animales',
  templateUrl: './listar-animales.component.html',
  styleUrls: ['./listar-animales.component.css']
})
export class ListarAnimalesComponent implements OnInit {
  animales:Animal[];
  animal :Animal;
  constructor(
    private http: HttpClient,
    public fb: FormBuilder,
    public animalesService : AnimalesService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.obtenerAnimales();
  }

  private obtenerAnimales(){
    this.animalesService.getAllAnimales().subscribe(dato=>{
      this.animales = dato;
    });
  }


  onClickEliminar(idanimal:number){
    this.animalesService.deleteAnimal(idanimal).subscribe(
      animales=> this.animales= this.animales.filter(ani=>ani.idanimal!==idanimal)
    );
  }




}
