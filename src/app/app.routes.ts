import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./layout/landing/layout-landing/layout-landing.component'),

      children:[

      { path:'', loadComponent: ()  => import('./pages/home/home.component')},
      { path:'cursos',loadComponent: ()  => import('./pages/cursos-publicos/cursos-publicos.component')},
      { path:'cursos/:id',loadComponent: ()  => import('./pages/cursos-publicos/curso-detalle/curso-detalle.component')},
      { path:'nosotros', loadComponent: ()  => import('./pages/nosotros/nosotros.component')},
    ]
  },
  {
    path:'auth',
    children:[
      {path : 'login', loadComponent: ()=> import ('./auth/login/login.component')},
      {path : 'register', loadComponent: ()=> import ('./auth/register/register.component')}
    ]
  }
];
