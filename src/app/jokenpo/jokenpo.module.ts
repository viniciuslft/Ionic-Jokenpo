import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokenpoPageRoutingModule } from './jokenpo-routing.module';

import { JokenpoPage } from './jokenpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokenpoPageRoutingModule
  ],
  declarations: [JokenpoPage]
})
export class JokenpoPageModule {}
