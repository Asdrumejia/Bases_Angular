import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //Declaraciones
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exports: cosas visbles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    //imports: van solo modulos
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}