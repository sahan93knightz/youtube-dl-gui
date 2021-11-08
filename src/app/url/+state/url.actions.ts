import { createAction, props } from '@ngrx/store';
import { YoutubeDlInfo } from '../../shared/models/youtube-dl-info.model';

export const loadUrlInfo = createAction('[url] LOAD_URL_INFO', props<{ url: string }>());
export const loadingUrlInfoSuccess = createAction('[url] LOADING_URL_INFO_SUCCESS', props<{ urlInfo: YoutubeDlInfo }>());
export const loadingUrlInfoFailed = createAction('[url] LOADING_URL_INFO_FAILED', props<{ error: string }>());

