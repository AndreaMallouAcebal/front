import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/login/login-usuario';
import { AuthService } from 'src/app/services/seguridad/auth.service';
import { TokenService } from 'src/app/services/seguridad/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  userLogin : UserLogin;
  userEmail: string;
  contrasenia: string;
  rol : string;
  errMsg : string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged=true;
      this.isLoginFail=false;
      this.rol = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.userEmail,this.contrasenia);
    this.authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.userEmail);
        this.tokenService.setAuthorities(data.authorities);
        this.rol = data.authorities[0];
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.message;
      }

    )
  }

}
