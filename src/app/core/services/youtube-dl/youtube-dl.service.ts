import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { YoutubeDlInfo } from '../../../shared/models/youtube-dl-info.model';
import { ElectronService } from '../electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDlService {

  constructor(private electronService: ElectronService) {
  }

  getInfo(url: string): Observable<YoutubeDlInfo> {
    return this.electronService
      .execute('youtube-dl', ['-j', url])
      .pipe(
        map((v: { code: string; data: string }) => this.toCamel(JSON.parse(v.data))),
        catchError((v: { code: string; data: string }) => of(v))
      );
  }

  async download(url: string, format: string, location?: string, outputFilenameFormat?: string) {
    return this.electronService
      .execute('youtube-dl', ['-f', format, url], './downloads');
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
