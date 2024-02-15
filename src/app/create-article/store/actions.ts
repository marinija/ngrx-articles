import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IArticle } from "@shared/components/feed/types/article.interface";
import { IArticleRequest } from "@shared/types/article-request.interface";
import { IBackendErrors } from "@shared/types/backend-errors.interface";

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create article': props<{request: IArticleRequest}>(),
    'Create article success': props<{article: IArticle}>(),
    'Create article failure': props<{errors: IBackendErrors}>(),
  }
});
