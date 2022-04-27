import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ClientesComponent
      },
      {
        path: 'vercliente',
        component: ClienteDetalleComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
