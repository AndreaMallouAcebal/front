import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/rol/rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private rolUrl="http://localhost:8080/roles";

  constructor(
    private http:HttpClient
  ) { }

  //método para obtener los empleados
  public getAllRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.rolUrl);
  }

  //método para registrar animal
  public saveRol(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.rolUrl, rol);
  } 

  public getRolId(id:number): Observable<any>{
    return this.http.get(this.rolUrl + '/' + id) ; 
  }

  public updateRol(rol:Rol): Observable<any>{
    return this.http.put(this.rolUrl + '/' + rol.id , rol);
  }

   public deleteRol(id: number): Observable<Rol> {
     return this.http.delete<Rol>(this.rolUrl + '/' + id)
   }
}
