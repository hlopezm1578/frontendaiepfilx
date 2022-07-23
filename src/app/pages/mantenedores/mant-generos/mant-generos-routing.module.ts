import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';


const routes:Routes = [
  {
    path:'',
    component: ListaComponent
  },
  {
    path:'nuevo',
    component: NuevoComponent
  }
  ,
  {
    path:'editar/:id',
    component: EditarComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MantGenerosRoutingModule { }
