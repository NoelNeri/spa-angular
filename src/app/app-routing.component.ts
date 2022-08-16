import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { GerentesComponent } from './gerentes/gerentes.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Gerente
  {
    path: 'funcinarios',
    component: FuncionariosComponent
  },
  //Gerente
  {
    path: 'gerentes',
    component: GerentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }