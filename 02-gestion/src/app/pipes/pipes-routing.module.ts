import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { BasicosComponent } from './pages/basicos/basicos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'avanzados',
        component: AvanzadosComponent

      },
      {
        path: 'basicos',
        component: BasicosComponent
      },
      {
        path:'**',
        redirectTo: 'basicos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
