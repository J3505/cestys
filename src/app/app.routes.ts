import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./layout/landing/layout-landing/layout-landing.component'),
        children:[
      {
        path:'',
        loadComponent: ()  => import('./pages/home/home.component').then(m => m.HomeComponent)

      },
      {
        path:'cursos',
        loadComponent: ()  => import('./pages/cursos-publicos/cursos-publicos.component').then(m => m.CursosPublicosComponent)

      },
      {
        path:'contacto',
        loadComponent: ()  => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)

      },
    ]
  }
];
