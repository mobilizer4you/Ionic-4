import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffencesPageRoutingModule } from './offences-routing.module';

import { OffencesPage } from './offences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffencesPageRoutingModule
  ],
  declarations: [OffencesPage]
})
export class OffencesPageModule {}
