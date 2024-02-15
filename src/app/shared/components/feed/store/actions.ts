import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IGetFeedResponse } from "../types/get-feed-response.interface";

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{url: string}>(),
    'Get feed success': props<{feed: IGetFeedResponse}>(),
    'Get feed failure': emptyProps(),
  }
});
