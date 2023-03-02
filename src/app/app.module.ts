import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';



//El NgModule; es simplemnente el decorador
@NgModule({
  //En esta parte vamos a poner componentes que seran importados
  declarations: [
    AppComponent,
  ],
  //En esta parte vamos a otros modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  //Esta parte son los servicios especificos a un modulo
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
