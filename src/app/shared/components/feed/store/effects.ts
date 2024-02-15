import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FeedService } from "../services/feed.service";
import { feedActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { IGetFeedResponse } from "../types/get-feed-response.interface";


export const getCurrenyUserEffect = createEffect((
  actions$ = inject(Actions),
  feedService = inject(FeedService)
) => {
  return actions$.pipe(
    ofType(feedActions.getFeed),
    switchMap(({url}) => {
      return feedService.getFeed(url).pipe(
        map((feed: IGetFeedResponse) => {
          return feedActions.getFeedSuccess({feed})
        }),
        catchError(() => {
          return of(feedActions.getFeedFailure())
        })
      )
    })
  )
}, {functional: true})
