import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal} from 'src/app/models/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  
  private animalUrl="http://localhost:8080/animales";

  constructor(
    private http:HttpClient
  ) { }

  //método para obtener los empleados
  public getAllAnimales():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.animalUrl);
  }

  //método para registrar animal
  public saveAnimal(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>(this.animalUrl, animal);
  } 

  public getAnimalId(id:number): Observable<any>{
    return this.http.get(this.animalUrl + '/' + id) ; 
  }

  public updateAnimal(animal:Animal): Observable<any>{
    return this.http.put(this.animalUrl + '/' + animal.id , animal);
  }

   deleteAnimal(id: number): Observable<Animal> {
     return this.http.delete<Animal>(this.animalUrl + '/' + id)
   }
}
