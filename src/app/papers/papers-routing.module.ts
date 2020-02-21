import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapersPage } from './papers.page';

const routes: Routes = [
  {
    path: '',
    component: PapersPage
  },
  {
    path: ':paperId',
    loadChildren: () => import('./paper-details/paper-details.module').then( m => m.PaperDetailsPageModule)
  },
  {
    path: '/papers/:paperId',
    loadChildren: () => import('./paper-details/paper-details.module').then( m => m.PaperDetailsPageModule)
  },
  {
    path: '/offenceId/:paperId',
    loadChildren: () => import('./paper-details/paper-details.module').then( m => m.PaperDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapersPageRoutingModule {}
