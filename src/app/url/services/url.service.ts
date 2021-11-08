import { Injectable } from '@angular/core';
import { YoutubeDlService } from '../../core/services/youtube-dl/youtube-dl.service';

@Injectable()
export class UrlService {

  constructor(private youtubeDlService: YoutubeDlService) {
  }

  getVideoInformation(url: string) {
    return this.youtubeDlService.getInfo(url);
  }
}
