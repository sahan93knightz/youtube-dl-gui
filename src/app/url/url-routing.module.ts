import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UrlComponent } from './components/url/url.component';

const routes: Routes = [
  {
    path: 'url',
    component: UrlComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlRoutingModule {}
