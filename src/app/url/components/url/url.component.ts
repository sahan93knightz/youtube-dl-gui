import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { UrlFacade } from '../../+state/url.facade';
import { Format } from '../../../shared/models/youtube-dl-info.model';
import { UrlDetailsComponent } from '../url-details/url-details.component';


@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss'],
})
export class UrlComponent implements OnInit {
  url = 'https://www.youtube.com/watch?v=mzmkEqyOaqo';
  output = '';

  constructor(
    private dialog: MatDialog,
    private urlFacade: UrlFacade, private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.urlFacade.urlInfo$.subscribe(info => {
      if (info) {
        this.ngZone.run(() =>
          this.dialog.open(UrlDetailsComponent, {
            data: info,
          })
        ).afterClosed().subscribe((format: Format) => console.log(format));
      }
    });
  }

  go() {
    this.urlFacade.loadUrlInfo(this.url);
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
