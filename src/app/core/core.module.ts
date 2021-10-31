import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeDlService } from './services/youtube-dl/youtube-dl.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [YoutubeDlService],
})
export class CoreModule {
}
