import {Component} from '@angular/core';


@Component({

    selector:'app-contador',
    template:`
    
    <h1>{{title}}</h1> <!--importamos el titulo de app.component.ts-->

    <button (click)="acumular(base)"> {{base}} </button>
    <h3>la base es: <strong>{{base}}</strong> </h3>
    <button (click)="acumular(-base)">-5</button>
    <br>

    <button (click)="acumular(1)">+1</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-1)">-1</button>
        

    `


})
export class contadorComponent {
    title = 'Contador app';
    numero:number = 10;
    base:number = 5;
  
    //metodo sumar
  
    acumular(valor:number){
      this.numero += valor;
    }
}