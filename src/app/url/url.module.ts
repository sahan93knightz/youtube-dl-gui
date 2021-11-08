import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { DownloadSummaryModule } from '../download-summary/download-summary.module';
import { UrlEffects } from './+state/url.effects';
import { UrlFacade } from './+state/url.facade';
import { urlFeatureKey, urlInitialState, urlReducer } from './+state/url.reducer';

import { UrlRoutingModule } from './url-routing.module';

import { UrlComponent } from './components/url/url.component';
import { SharedModule } from '../shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core/core.module';


import { EffectsModule } from '@ngrx/effects';
import { UrlService } from './services/url.service';
import { UrlDetailsComponent } from './components/url-details/url-details.component';

@NgModule({
  declarations: [UrlComponent, UrlDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UrlRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    CoreModule,
    DownloadSummaryModule,
    EffectsModule.forFeature([UrlEffects]),
    StoreModule.forFeature(urlFeatureKey, urlReducer, {
      initialState: urlInitialState,
    })
  ],
  providers: [UrlFacade, UrlService]
})
export class UrlModule {
}
