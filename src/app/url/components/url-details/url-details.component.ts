import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Format, YoutubeDlInfo } from '../../../shared/models/youtube-dl-info.model';

@Component({
  selector: 'app-url-details',
  templateUrl: './url-details.component.html',
  styleUrls: ['./url-details.component.scss']
})
export class UrlDetailsComponent {

  selectedFormat: Format = null;

  constructor(
    private dialogRef: MatDialogRef<UrlDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private _urlInfo: YoutubeDlInfo) {
  }

  get urlInfo(): YoutubeDlInfo {
    return this._urlInfo;
  }

  getFormatName(format: Format) {
    const vals = format.format.split(/[\d]+ - /gm);
    if (vals && vals.length >= 2) {
      return vals[1] + ' - ' + format.ext.toUpperCase();
    }
    return format.format;
  }

  async download() {
    // const out = await this.youtubeDlService.download(this.data.webpageUrl, this.selectedFormat.formatId);
    // console.log(out);
    this.dialogRef.close(this.selectedFormat);
  }

}
