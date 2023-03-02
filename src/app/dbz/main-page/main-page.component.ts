import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

// interface Personaje {
//    nombre: string, 
//    poder : number
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

   title: string = 'ragon Ball Z';

   nuevo: Personaje = {
     nombre: 'Maestro Roshi',
     poder: 1000
  };

  //En este punto estamos haciendo una inyeccion de dependencias
  constructor(private dbzService: DbzService) {};

};
