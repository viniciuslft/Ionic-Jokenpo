import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParesImparesPage } from './pares-impares.page';

const routes: Routes = [
  {
    path: '',
    component: ParesImparesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParesImparesPageRoutingModule {}
