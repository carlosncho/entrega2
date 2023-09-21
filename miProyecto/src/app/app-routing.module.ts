import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'e404e',
    loadChildren: () => import('./e404e/e404e.module').then( m => m.E404ePageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path:'certificados',
    component: CertificadosComponent
  },
  {
    path:'mis-datos',
    component: MisDatosComponent
  },
  {
    path:'exp-laboral',
    component: ExpLaboralComponent
  },
  {
    path:'**',
    redirectTo: 'e404e',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
