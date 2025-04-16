import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdivinhaPage } from './adivinha.page';

const routes: Routes = [
  {
    path: '',
    component: AdivinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdivinhaPageRoutingModule {}
