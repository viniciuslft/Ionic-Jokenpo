import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdivinhaPageRoutingModule } from './adivinha-routing.module';

import { AdivinhaPage } from './adivinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdivinhaPageRoutingModule
  ],
  declarations: [AdivinhaPage]
})
export class AdivinhaPageModule {}
