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
  },
  {
    path:'admin',
    loadComponent: () => import ('./layout/admin/layout-admin/layout-admin.component'),
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import ('./admin/dashboard/dashboard.component')},
      { path: 'cursos', loadComponent: () => import ('./admin/cursos/cursos.component')},
      { path: 'estudiantes', loadComponent: () => import ('./admin/estudiantes/estudiantes.component')},
      { path: 'ventas', loadComponent: () => import ('./admin/ventas/ventas.component')}
    ]

  },
  {
    path:'estudiante',
    loadComponent: () => import ('./layout/estudiante/layout-estudiante/layout-estudiante.component'),
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadComponent: () => import('./estudiante/dashboard/dashboard.component')},
      { path: 'cursos', loadComponent: () => import('./estudiante/cursos/cursos.component')},
      { path: 'perfil', loadComponent: () => import('./estudiante/perfil/perfil.component')},
    ]
  },
  {
    path:'profesor',
    loadComponent: () => import ('./layout/profesor/layout-profesor/layout-profesor.component'),
    children:[
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadComponent: () => import('./profesor/dashboard/dashboard.component')},
      {path: 'clases', loadComponent: () => import('./profesor/clases/clases.component')},
      {path: 'perfil', loadComponent: () => import('./profesor/perfil/perfil.component')}
    ]
  }

];
