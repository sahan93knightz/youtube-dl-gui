import { Injectable } from '@angular/core';
import { ifError } from 'assert';
import * as _ from 'lodash';
import { InitDownloadDialogComponent } from '../../../init-download-dialog/init-download-dialog.component';
import { YoutubeDlInfo } from '../../../shared/models/youtube-dl-info.model';
import { ElectronService } from '../electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDlService {

  constructor(private electronService: ElectronService) {
  }

  async getInfo(url: string): Promise<YoutubeDlInfo> {
    let output = '';
    const exitCode = await this.electronService
      .execute('youtube-dl', ['-j', url], '', (o) => {
        output += o;
      });
    if (exitCode !== 0) {
      throw new Error(`Youtube-dl exit with errors: ${output}`);
    }
    return this.toCamel(JSON.parse(output));
  }

  async download(url: string, format: string, location?: string, outputFilenameFormat?: string) {
    console.log(url, format);
    let output = '';
    const exitCode = await this.electronService
      .execute('youtube-dl',
        [
          // '-o', './downloads/',
          '-f', format, url
        ], './downloads', (o) => {
          output += o;
        });
    if (exitCode !== 0) {
      throw new Error(`Youtube-dl exit with errors: ${output}`);
    }
    return output;
  }

  private toCamel(o) {
    let newO;
    let origKey;
    let newKey;
    let value;
    if (o instanceof Array) {
      return o.map((v: any) => {
        if (typeof v === 'object') {
          v = this.toCamel(v);
        }
        return v;
      });
    } else {
      newO = {};
      for (origKey in o) {
        if (o.hasOwnProperty(origKey)) {
          newKey = _.camelCase(origKey);
          // newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
          value = o[origKey];
          if (value instanceof Array || (value !== null && value.constructor === Object)) {
            value = this.toCamel(value);
          }
          newO[newKey] = value;
        }
      }
    }
    return newO;
  }
}
