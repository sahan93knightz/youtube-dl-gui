import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UrlService } from '../services/url.service';

import * as HomeActions from './url.actions';

@Injectable()
export class UrlEffects {

  urlInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadUrlInfo),
      switchMap((value) =>
        this.homeService.getVideoInformation(value.url)
          .pipe(
            map(results => HomeActions.loadingUrlInfoSuccess({urlInfo: results})),
            catchError(error => of(HomeActions.loadingUrlInfoFailed(error))),
          )
      )
    ),
  );

  constructor(private actions$: Actions, private homeService: UrlService) {
  }


}
