import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioUrl="http://localhost:8080/usuarios";
  private usuarioAuth="http://localhost:8080/auth/new";
  private miPerfilUrl="http://localhost:8080/auth/new";

  constructor(
    private http:HttpClient
  ) { }

  //método para obtener los empleados
  public getAllUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl);
  }

  //método para registrar animal
  public saveUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.usuarioAuth, usuario);
  } 

  public getUsuariolId(id:number): Observable<any>{
    return this.http.get(this.usuarioUrl + '/' + id) ; 
  }

  public updateUsuario(usuario:Usuario): Observable<any>{
    return this.http.put(this.usuarioUrl + '/' + usuario.id , usuario);
  }

  public deleteUsuario(id: number): Observable<Usuario> {
     return this.http.delete<Usuario>(this.usuarioUrl + '/' + id)
   }

   public getMyUser(params: HttpParams): Observable<Usuario>{
    return this.http.post<Usuario>(this.miPerfilUrl, params);
   }
}
