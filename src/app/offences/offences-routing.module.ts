import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffencesPage } from './offences.page';

const routes: Routes = [
  {
    path: '',
    component: OffencesPage
  },
  {
    path: ':offenceId',
    loadChildren: () => import('./offence-details/offence-details.module').then( m => m.OffenceDetailsPageModule)
  },
  {
    path: '/offences/:offenceId',
    loadChildren: () => import('./offence-details/offence-details.module').then( m => m.OffenceDetailsPageModule)
  },
  {
    path: ':offenceId/:paperId',
    loadChildren: () => import('../papers/paper-details/paper-details.module').then( m => m.PaperDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffencesPageRoutingModule {}
