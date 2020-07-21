import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorreComponent } from './components/torre/torre.component';
import { TorreDetalleComponent } from './components/torre-detalle/torre-detalle.component';
import { TorreCrearComponent } from './components/torre-crear/torre-crear.component';
import { TorreActualizarComponent } from './components/torre-actualizar/torre-actualizar.component';

//Consume Api Rest
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TorreComponent,
    TorreDetalleComponent,
    TorreCrearComponent,
    TorreActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
