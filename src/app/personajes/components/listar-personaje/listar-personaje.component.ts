import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfases/personaje.interface';

@Component({
  selector: 'app-listar-personaje',
  templateUrl: './listar-personaje.component.html',
  styleUrl: './listar-personaje.component.css'
})
export class ListarPersonajeComponent {

  // ecorador @Input() son propiedades enviadas para su uso
  @Input() personajes: Personaje[] = [];

}
