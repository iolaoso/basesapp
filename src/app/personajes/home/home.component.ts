import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfases/personaje.interface';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public personajesPadre: Personaje[]= [];

  constructor(
    //inyecciones de codigo - llamar al codigo de un archivo y traerlo atraz de una propiedad
    private personajeService: PersonajeService
  ){}

  ngOnInit(){
    this.getListarPersonajes();

  }

  getListarPersonajes (){
    this.personajesPadre= [...this.personajeService.getPersonajes()];
  }

  addPersonaje (personaje:Personaje){
    console.log('addPersonaje:', personaje)

    this.personajeService.savePersonaje(personaje);

    this.getListarPersonajes();
  }
}
