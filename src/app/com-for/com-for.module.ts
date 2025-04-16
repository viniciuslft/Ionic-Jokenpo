import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComForPageRoutingModule } from './com-for-routing.module';

import { ComForPage } from './com-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComForPageRoutingModule
  ],
  declarations: [ComForPage]
})
export class ComForPageModule {}
