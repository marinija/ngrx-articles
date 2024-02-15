import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import { IEditArticleState } from "../types/edit-article-state.interface";
import { editArticleActions } from "./actions";

const initialState: IEditArticleState = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null
};

const editArticleFeature = createFeature({
  name: 'editArticle',
  reducer: createReducer(
    initialState,
    on(editArticleActions.getArticle, state => ({...state, isLoading: true})),
    on(editArticleActions.getArticleSuccess, (state, action) => ({...state, isLoading: false, article: action.article})),
    on(editArticleActions.updateArticleFailure, (state) => ({...state, isLoading: false})),
    on(editArticleActions.updateArticle, state => ({...state, isSubmitting: true})),
    on(editArticleActions.updateArticleSuccess, (state) => ({...state, isSubmitting: false})),
    on(editArticleActions.updateArticleFailure, (state, action) => ({...state, isSubmitting: false, validationErrors: action.errors})),
    on(routerNavigatedAction, () => initialState)
  )
})

export const {
  name: editArticleFeatureKey,
  reducer: editArticleReducer,
  selectArticle,
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors
} = editArticleFeature
