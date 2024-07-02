import { Injectable } from '@angular/core';
import { Personaje } from '../interfases/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {


  public personajes: Personaje[]= [
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

  constructor() { }

  getPersonajes(): Personaje[] {
    return this.personajes
  }

  savePersonaje(personaje: Personaje): void {

    this.personajes.push(personaje);

  }
}
