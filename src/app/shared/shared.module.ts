import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { WithLoadingPipe } from './pipes/with-loading.pipe';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, WithLoadingPipe],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, WithLoadingPipe]
})
export class SharedModule {
}
