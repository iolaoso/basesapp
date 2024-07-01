import { Component } from '@angular/core';
import { Personaje } from '../interfases/personaje.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public personajesPadre: Personaje[]= [
    {
      name: 'Flash',
      poder: 500
    },
    {
      name: 'Spiderman',
      poder: 1000
    },
    {
      name: 'Batman',
      poder: 700
    }
  ];

  addPersonaje (personaje:Personaje){
    this.personajesPadre.push(personaje);
  }
}
