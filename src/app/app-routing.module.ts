import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantpeliculasComponent } from './pages/mantenedores/peliculas/mantpeliculas/mantpeliculas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'mantenedor-generos',
    loadChildren:()=>import('./pages/mantenedores/mant-generos/mant-generos.module').then(m=>m.MantGenerosModule),
    canLoad : [AdminGuard]
  },
  {
    path:'mantenedor-actores',
    loadChildren:()=>import('./pages/mantenedores/mant-actores/mant-actores.module').then(m=>m.MantActoresModule),
    canLoad : [AdminGuard]
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'mantpeliculas',
    component:MantpeliculasComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
