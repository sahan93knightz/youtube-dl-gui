import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import { YoutubeDlService } from '../core/services/youtube-dl/youtube-dl.service';
import { InitDownloadDialogComponent } from '../init-download-dialog/init-download-dialog.component';
import * as _ from 'lodash';
import { YoutubeDlInfo } from '../shared/models/youtube-dl-info.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  url = 'https://www.youtube.com/watch?v=mzmkEqyOaqo';
  output = '';

  constructor(
    private router: Router,
    private youtubeDlService: YoutubeDlService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    // this.go();
  }

  async go() {
    this.output = '';
    const info: YoutubeDlInfo = await this.youtubeDlService.getInfo(this.url);
    this.dialog.open(InitDownloadDialogComponent, {
      data: info,
    });
  }

  toCamel(o) {
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
