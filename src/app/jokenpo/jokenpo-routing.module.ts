import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokenpoPage } from './jokenpo.page';

const routes: Routes = [
  {
    path: '',
    component: JokenpoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokenpoPageRoutingModule {}
