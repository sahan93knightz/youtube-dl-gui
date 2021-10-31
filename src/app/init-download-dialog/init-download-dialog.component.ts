import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElectronService } from '../core/services';
import { YoutubeDlService } from '../core/services/youtube-dl/youtube-dl.service';
import { Format, YoutubeDlInfo } from '../shared/models/youtube-dl-info.model';

@Component({
  selector: 'app-init-download-dialog',
  templateUrl: './init-download-dialog.component.html',
  styleUrls: ['./init-download-dialog.component.scss'],
})
export class InitDownloadDialogComponent implements OnInit {
  selectedFormat: Format = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: YoutubeDlInfo,
              private youtubeDlService: YoutubeDlService) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  getFormatName(format: Format) {
    const vals = format.format.split(/[\d]+ - /gm);
    if (vals && vals.length >= 2) {
      return vals[1] + ' - ' + format.ext.toUpperCase();
    }
    return format.format;
  }

  async download() {
    const out = await this.youtubeDlService.download(this.data.webpageUrl, this.selectedFormat.formatId);
    console.log(out)
  }
}
