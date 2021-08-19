import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'; //Para ir ahi
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent }, //Path asigna un string al URL en el navegador. Component es la componente que crea el router cuando navego a esa ruta
  { path: 'detail/:id', component: PersonaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }