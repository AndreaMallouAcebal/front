import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/models/cita/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citaUrl="http://localhost:8080/citas";

  constructor(
    private http:HttpClient
  ) { }

  //método para obtener los empleados
  public getAllCitas():Observable<Cita[]>{
    return this.http.get<Cita[]>(this.citaUrl);
  }

  //método para registrar animal
  public saveCita(cita: Cita): Observable<Cita>{
    return this.http.post<Cita>(this.citaUrl, cita);
  } 

  public getCitaId(id:number): Observable<any>{
    return this.http.get(this.citaUrl + '/' + id) ; 
  }

  public updateCita(cita:Cita): Observable<any>{
    return this.http.put(this.citaUrl + '/' + cita.id , cita);
  }

   public deleteCita(id: number): Observable<Cita> {
     return this.http.delete<Cita>(this.citaUrl + '/' + id)
   }
}
