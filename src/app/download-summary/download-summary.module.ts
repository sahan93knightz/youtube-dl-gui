import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { DownloadSummaryComponent } from './download-summary.component';


@NgModule({
  declarations: [
    DownloadSummaryComponent
  ],
  exports: [
    DownloadSummaryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CoreModule
  ]
})
export class DownloadSummaryModule {
}
