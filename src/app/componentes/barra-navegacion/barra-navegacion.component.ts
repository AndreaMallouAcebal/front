import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/seguridad/token.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

isLogged=false;

constructor (private tokenService: TokenService) {}

ngOnInit(){
  if(this.tokenService.getToken()){
    this.isLogged = true;
  }else {
    this.isLogged = false;
  }
}

onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
}
}
