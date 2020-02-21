import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperDetailsPage } from './paper-details.page';

const routes: Routes = [
  {
    path: '',
    component: PaperDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperDetailsPageRoutingModule {}
