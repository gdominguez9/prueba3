import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'; //Para ir ahi
import { PersonaEditarComponent } from './persona-editar/persona-editar.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PersonaAddComponent } from './persona-add/persona-add.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent }, //Path asigna un string al URL en el navegador. Component es la componente que crea el router cuando navego a esa ruta
  { path: 'editar/:id', component: PersonaEditarComponent },
  { path: 'add/:id', component: PersonaAddComponent },
  { path: 'prueba/:id', component: PruebaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }