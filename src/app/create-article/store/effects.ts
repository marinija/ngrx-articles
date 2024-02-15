import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { CreateArticleService } from "../services/create-article.service"
import { catchError, map, of, switchMap, tap } from "rxjs"
import { createArticleActions } from "./actions"
import { IArticle } from "@shared/components/feed/types/article.interface"
import { Router } from "@angular/router"
import { HttpErrorResponse } from "@angular/common/http"


export const createArticleEffect = createEffect((
  actions$ = inject(Actions),
  createArticleService = inject(CreateArticleService)
) => {
  return actions$.pipe(
    ofType(createArticleActions.createArticle),
    switchMap(({request}) => {
      return createArticleService.createArticle(request).pipe(
        map((article: IArticle) => {
          return createArticleActions.createArticleSuccess({article})
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(createArticleActions.createArticleFailure({errors: errorResponse.error.errors}))
        })
      )
    })
  )
}, {functional: true})

export const redirectAfterCreateEffect = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(createArticleActions.createArticleSuccess),
      tap(({article}) => {
        router.navigate(['/articles', article.slug]);
      })
    )
  }, {functional: true, dispatch: false}
)
