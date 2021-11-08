import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { UrlRoutingModule } from './url/url-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'url',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    UrlRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
