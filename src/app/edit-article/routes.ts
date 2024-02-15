import { Route } from "@angular/router";

import * as EditArticleEffects from './store/effects'
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { editArticleFeatureKey, editArticleReducer } from "./store/reducers";
import { EditArticleComponent } from "./components/edit-article/edit-article.component";
import { EditArticleService } from "./services/Edit-article.service";

export const routes: Route[] = [
 {
  path: '',
  component: EditArticleComponent,
  providers: [EditArticleService, provideEffects(EditArticleEffects), provideState(editArticleFeatureKey, editArticleReducer)]
 }
]
