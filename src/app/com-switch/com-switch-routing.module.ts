import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComSwitchPage } from './com-switch.page';

const routes: Routes = [
  {
    path: '',
    component: ComSwitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComSwitchPageRoutingModule {}
