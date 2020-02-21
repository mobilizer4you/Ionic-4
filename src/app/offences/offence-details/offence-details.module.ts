import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffenceDetailsPageRoutingModule } from './offence-details-routing.module';

import { OffenceDetailsPage } from './offence-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffenceDetailsPageRoutingModule
  ],
  declarations: [OffenceDetailsPage]
})
export class OffenceDetailsPageModule {}
