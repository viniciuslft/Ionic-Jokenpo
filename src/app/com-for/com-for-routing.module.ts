import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComForPage } from './com-for.page';

const routes: Routes = [
  {
    path: '',
    component: ComForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComForPageRoutingModule {}
