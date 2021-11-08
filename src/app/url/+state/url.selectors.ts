import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Url, urlFeatureKey } from './url.reducer';

export const getUrlState = createFeatureSelector<Url>(urlFeatureKey);
export const getUrl = createSelector(getUrlState, (state: Url) => state.url);
export const getUrlInfo = createSelector(getUrlState, (state: Url) => state.urlInfo);
export const getUrlInfoLoading = createSelector(getUrlState, (state: Url) => state.urlInfoLoading);

export const homeQuery = {
  getUrl,
  getUrlInfo,
  getUrlState,
  getUrlInfoLoading
};
