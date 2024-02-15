import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import { IArticleState } from "../types/article-state.interface";
import { articleActions } from "./actions";

const initialState: IArticleState = {
  isLoading: false,
  error: null,
  data: null
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, state => ({...state, isLoading: true})),
    on(articleActions.getArticleSuccess, (state, action) => ({...state, isLoading: false, data: action.article})),
    on(articleActions.getArticleFailure, state => ({...state, isLoading: false})),
    on(routerNavigatedAction, () => initialState)
  )
})

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectError,
  selectData: selectArticleData
} = articleFeature
