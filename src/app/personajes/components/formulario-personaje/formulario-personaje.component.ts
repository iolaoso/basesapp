import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfases/personaje.interface';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrl: './formulario-personaje.component.css'
})
export class FormularioPersonajeComponent {

  // para pasar los datos al padre
  @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  personajeForm: Personaje ={
    name: '',
    poder: 0
  }

  registrarPersonaje(){
    // hay que romper lareferencia y esparcir personaje form en nuevoPersonaje
    const nuevoPersonaje = {...this.personajeForm};

    console.log(nuevoPersonaje);

    if(nuevoPersonaje.name.length === 0) return;

    this.onNewPersonaje.emit(nuevoPersonaje);

    this.personajeForm.name='';
    this.personajeForm.poder=0;

  }





}
