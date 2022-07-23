import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { MantGenerosRoutingModule } from './mant-generos-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    ListaComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    MantGenerosRoutingModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MantGenerosModule { }
