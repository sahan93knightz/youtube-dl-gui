import { Action, createReducer, on } from '@ngrx/store';
import { YoutubeDlInfo } from '../../shared/models/youtube-dl-info.model';
import * as UrlActions from './url.actions';

export const urlFeatureKey = 'url';

export interface UrlState {
  readonly [urlFeatureKey]: Url;
}

export interface Url {
  url: string;
  urlInfo?: YoutubeDlInfo;
  urlInfoError?: string;
  urlInfoLoading: boolean;
}


export const urlInitialState: Url = {
  url: '',
  urlInfoLoading: false
};

const reducer = createReducer(
  urlInitialState,
  on(UrlActions.loadUrlInfo, (state, action) => ({...state, url: action.url, urlInfoLoading: true})),
  on(UrlActions.loadingUrlInfoSuccess, (state, action) => ({...state, urlInfo: action.urlInfo, urlInfoLoading: false})),
  on(UrlActions.loadingUrlInfoFailed, (state, action) => ({
    ...state,
    urlInfoError: action.error,
    urlInfoLoading: false
  })),
);

export function urlReducer(state: Url | undefined, action: Action): Url {
  return reducer(state, action);
}
