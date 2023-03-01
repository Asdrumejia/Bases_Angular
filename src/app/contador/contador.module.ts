import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    //Declaraciones
    declarations: [
        ContadorComponent 
    ],
    //exports: cosas visbles fuera de este modulo
    exports: [
        ContadorComponent 
    ],
    //imports: van solo modulos
    imports: [
        CommonModule
    ]
})
export class ContadorModule {}