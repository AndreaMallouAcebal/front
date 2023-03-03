import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/seguridad/token.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{

  isLogged = false;
  nombre = '';

  constructor(private tokenService: TokenService) {}
  
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombre = this.tokenService.getEmail();
    }else {
      this.isLogged = false;
      this.nombre = '';
    }
  }

  

}
