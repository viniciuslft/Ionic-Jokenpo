import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComSwitchPageRoutingModule } from './com-switch-routing.module';

import { ComSwitchPage } from './com-switch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComSwitchPageRoutingModule
  ],
  declarations: [ComSwitchPage]
})
export class ComSwitchPageModule {}
