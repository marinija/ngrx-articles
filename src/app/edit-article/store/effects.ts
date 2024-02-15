import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, of, switchMap, tap } from "rxjs"
import { editArticleActions } from "./actions"
import { IArticle } from "@shared/components/feed/types/article.interface"
import { Router } from "@angular/router"
import { HttpErrorResponse } from "@angular/common/http";
import { ArticleService as SharedArticleService } from "@shared/services/article.service";
import { EditArticleService } from "../services/Edit-article.service"

export const getArticleEffect = createEffect((
  actions$ = inject(Actions),
  articleService = inject(SharedArticleService)
) => {
  return actions$.pipe(
    ofType(editArticleActions.getArticle),
    switchMap(({slug}) => {
      return articleService.getArticle(slug).pipe(
        map((article: IArticle) => {
          return editArticleActions.getArticleSuccess({article})
        }),
        catchError(() => {
          return of(editArticleActions.getArticleFailure())
        })
      )
    })
  )
}, {functional: true})

export const updateArticleEffect = createEffect((
  actions$ = inject(Actions),
  editArticleService = inject(EditArticleService)
) => {
  return actions$.pipe(
    ofType(editArticleActions.updateArticle),
    switchMap(({request, slug}) => {
      return editArticleService.updateArticle(slug, request).pipe(
        map((article: IArticle) => {
          return editArticleActions.updateArticleSuccess({article})
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(editArticleActions.updateArticleFailure({errors: errorResponse.error.errors}))
        })
      )
    })
  )
}, {functional: true})

export const redirectAfterUpdateEffect = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(editArticleActions.updateArticleSuccess),
      tap(({article}) => {
        router.navigate(['/articles', article.slug]);
      })
    )
  }, {functional: true, dispatch: false}
)
