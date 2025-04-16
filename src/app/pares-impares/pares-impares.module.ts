import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParesImparesPageRoutingModule } from './pares-impares-routing.module';

import { ParesImparesPage } from './pares-impares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParesImparesPageRoutingModule
  ],
  declarations: [ParesImparesPage]
})
export class ParesImparesPageModule {}
