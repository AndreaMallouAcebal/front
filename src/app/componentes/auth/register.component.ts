import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/login/nuevo-usuario';
import { AuthService } from 'src/app/services/seguridad/auth.service';
import { TokenService } from 'src/app/services/seguridad/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = false;
  isRegistered= false;
  isRegisterFail = false;
  nuevoUsuario : NuevoUsuario;
  userEmail: string;
  contrasenia: string;
  nombre: string;
  apellidos: string;
  rol : string;
  dni : string;
  errMsg : string;

   constructor (
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
   ){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged=true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.apellidos,this.userEmail,this.dni,this.contrasenia);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegistered = true;
        this.isRegisterFail = false;
        this.router.navigate(['/login']);
      },
      err => {
        this.isRegistered = false;
        this.isRegisterFail = true;
        this.errMsg = err.error.mensaje;
      }

    )
  }
   
}
