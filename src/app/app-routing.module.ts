import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorreComponent } from './components/torre/torre.component';
import { TorreDetalleComponent } from './components/torre-detalle/torre-detalle.component';
import { TorreCrearComponent } from './components/torre-crear/torre-crear.component';
import { TorreActualizarComponent } from './components/torre-actualizar/torre-actualizar.component';


const routes: Routes = [
  {path: '', component: TorreComponent},
  {path: 'detalleTorre/:id', component: TorreDetalleComponent},
  {path: 'nuevaTorre', component: TorreCrearComponent},
  {path: 'editarTorre/:id', component: TorreActualizarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
