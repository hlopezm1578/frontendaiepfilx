import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { MantActoresRoutingModule } from './mant-actores-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';



@NgModule({
  declarations: [
    ListaComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    MantActoresRoutingModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MantActoresModule { }
