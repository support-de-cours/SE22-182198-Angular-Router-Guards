import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaybeYesMaybeNoGuard } from './guards/maybe/maybe-yes-maybe-no.guard';
import { NoGuard } from './guards/no/no.guard';

import { YesGuard } from './guards/yes/yes.guard';

const routes: Routes = [
  // Page A
  {
    path: 'page-a',
    component: AComponent,
    canActivate: [
      YesGuard
    ]
  },

  // Page B
  {
    path: 'page-b',
    component: BComponent,
    canActivate: [
      NoGuard
    ]
  },

  // Page C
  {
    path: 'page-c',
    component: CComponent,
    canActivate: [
      MaybeYesMaybeNoGuard
    ]
  },

  // Default Page
  {
    path: '',
    redirectTo: '/page-a',
    pathMatch: 'full'
  },

  // Wildcard route
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
