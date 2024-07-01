import { Component } from '@angular/core';
import { Personaje } from '../../interfases/personaje.interface';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrl: './formulario-personaje.component.css'
})
export class FormularioPersonajeComponent {

  personajeForm: Personaje ={
    name: '',
    poder: 0
  }

  registrarPersonaje(){
    // hay que romper lareferencia y esparcir personaje form en nuevoPersonaje
    const nuevoPersonaje = {...this.personajeForm};

    console.log(nuevoPersonaje);

    this.personajeForm.name='';
    this.personajeForm.poder=0;
  }

}
