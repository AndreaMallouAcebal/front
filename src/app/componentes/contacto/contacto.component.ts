import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
title='gmaps';
position = {
  lat:43.223284,
  lng: -5.795375
};
label = {
  color: 'white',
  text: "Aqui estamos"
};

}
