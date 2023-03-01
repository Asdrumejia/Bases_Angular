import { Component } from '@angular/core';


@Component({
   selector: 'app-contador',
   template: `
   
       <!-- Atributo de una clase en el lado del html -->
       <h1> {{ title }} </h1>
       
       <h3>La base es de: <strong> {{ base }} </strong></h3>
       
       <!-- Eventos en el lado del html  -->
       <button (click)="acumular(base)"> {{ base }} </button>
       
       <span> {{ number }} </span>
       
       <button (click)="acumular(-base)"> {{ base }} </button>

   `
})
export class ContadorComponent {
       title: string = 'Contador App';
       number: number  = 0;
       base: number = 5;
     
       acumular(valor: number){
            this.number += valor;
       };
};