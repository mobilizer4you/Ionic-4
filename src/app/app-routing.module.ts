import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'offences',
    loadChildren: () => import('./offences/offences.module').then( m => m.OffencesPageModule)
  },
  {
    path: 'papers',
    loadChildren: () => import('./papers/papers.module').then( m => m.PapersPageModule)
  },
  {
    path: ':offenceId',
    loadChildren: () => import('./offences/offence-details/offence-details.module').then( m => m.OffenceDetailsPageModule)
  },
  {
    path: ':paperId',
    loadChildren: () => import('./papers/paper-details/paper-details.module').then( m => m.PaperDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
