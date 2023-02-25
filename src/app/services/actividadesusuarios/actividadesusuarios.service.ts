import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividadusuario } from 'src/app/models/actividadusuario/actividadusuario';

@Injectable({
  providedIn: 'root'
})
export class ActividadesusuariosService {

 
  private actividadusuarioUrl="http://localhost:8080/actividadesusuarios";

  constructor(
    private http:HttpClient
  ) { }

  //método para obtener los empleados
  public getAllActividadesusuarios():Observable<Actividadusuario[]>{
    return this.http.get<Actividadusuario[]>(this.actividadusuarioUrl);
  }

  //método para registrar animal
  public saveActividadusuario(actividadusuario: Actividadusuario): Observable<Actividadusuario>{
    return this.http.post<Actividadusuario>(this.actividadusuarioUrl, actividadusuario);
  } 

  public getActividadusuarioId(id:number): Observable<any>{
    return this.http.get(this.actividadusuarioUrl + '/' + id) ; 
  }

  public updateActividadusuario(actividadusuario:Actividadusuario): Observable<any>{
    return this.http.put(this.actividadusuarioUrl + '/' + actividadusuario.id , actividadusuario);
  }

   deleteActividadusuario(id: number): Observable<Actividadusuario> {
     return this.http.delete<Actividadusuario>(this.actividadusuarioUrl + '/' + id)
   }
}
