import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { PopulatTagService } from "../services/popular-tag.service"
import { popularTagsActions } from "./actions"
import { catchError, map, of, switchMap } from "rxjs"
import { PopularTagType } from "../types/popular-tag.type"

export const getPopularTags = createEffect((
  actions$ = inject(Actions),
  popularTagService = inject(PopulatTagService)
) => {
  return actions$.pipe(
    ofType(popularTagsActions.getPopularTags),
    switchMap(() => {
      return popularTagService.getPopulatTags().pipe(
        map((popularTags: PopularTagType[]) => {
          return popularTagsActions.getPopularTagsSuccess({popularTags})
        }),
        catchError(() => {
          return of(popularTagsActions.getPopularTagsFailure())
        })
      )
    })
  )
}, {functional: true})
