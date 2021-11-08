import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UrlState } from './url.reducer';

import * as UrlActions from './url.actions';
import { homeQuery } from './url.selectors';

@Injectable()
export class UrlFacade {

  url$ = this.store.select(homeQuery.getUrl);
  urlInfo$ = this.store.select(homeQuery.getUrlInfo);
  urlInfoLoading$ = this.store.select(homeQuery.getUrlInfoLoading);

  constructor(private store: Store<UrlState>) {
  }

  loadUrlInfo(url: string) {
    this.store.dispatch(UrlActions.loadUrlInfo({url}));
  }


}
