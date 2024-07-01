import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  public valor : number = 0;

  incrementar(){
    this.valor += 1;
  }

  decrementar(){
    this.valor -= 1;
  }

  reset(){
    this.valor = 0;
  }

}
