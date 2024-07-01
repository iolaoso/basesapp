import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  public heroes: string[] = ['Batman','Spiderman','Capitan America','Hulk','Chapulin Colorado','Flash'];

  public ultimoEliminado?:string;

  eliminarUltimoHeroe(){
    // el pop elimina el ultimo elemento y lo devuelve, se aprovecha y se guarda en la propiedad
    this.ultimoEliminado = this.heroes.pop();
  }


}
