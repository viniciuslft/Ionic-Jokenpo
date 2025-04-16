import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pares-impares',
    loadChildren: () => import('./pares-impares/pares-impares.module').then( m => m.ParesImparesPageModule)
  },
  {
    path: 'com-for',
    loadChildren: () => import('./com-for/com-for.module').then( m => m.ComForPageModule)
  },
  {
    path: 'com-switch',
    loadChildren: () => import('./com-switch/com-switch.module').then( m => m.ComSwitchPageModule)
  },
  {
    path: 'adivinha',
    loadChildren: () => import('./adivinha/adivinha.module').then( m => m.AdivinhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
