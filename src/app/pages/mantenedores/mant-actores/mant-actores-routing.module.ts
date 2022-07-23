import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes:Routes = [
  {
    path:'',
    component:ListaComponent
  },
  {
    path:'nuevo',
    component:NuevoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MantActoresRoutingModule { }
