import { Component } from "@angular/core";


@Component({

  selector:'app-counter',
  template:`
  <h3>Contador = {{contador}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>

<button (click)="reset()">Reset</button>

  `

})

export class CounterComponent{

  public contador:number=10;

  increaseBy(value:number):void{
    this.contador= this.contador +value;

  }

  reset(){

    this.contador=10;
  }

}
