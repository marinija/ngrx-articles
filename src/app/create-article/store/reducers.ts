import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import { ICreateArticleState } from "../types/create-article-state.interface";
import { createArticleActions } from "./actions";

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null
};

const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(createArticleActions.createArticle, state => ({...state, isSubmitting: true})),
    on(createArticleActions.createArticleSuccess, (state) => ({...state, isSubmitting: false})),
    on(createArticleActions.createArticleFailure, (state, action) => ({...state, isSubmitting: false, validationErrors: action.errors})),
    on(routerNavigatedAction, () => initialState)
  )
})

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors
} = createArticleFeature
