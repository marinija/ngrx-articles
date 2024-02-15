import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IArticle } from "@shared/components/feed/types/article.interface";
import { IArticleRequest } from "@shared/types/article-request.interface";
import { IBackendErrors } from "@shared/types/backend-errors.interface";

export const editArticleActions = createActionGroup({
  source: 'edit article',
  events: {
    'Get article': props<{slug: string}>(),
    'Get article success': props<{article: IArticle}>(),
    'Get article failure': emptyProps(),

    'Update article': props<{request: IArticleRequest; slug: string}>(),
    'Update article success': props<{article: IArticle}>(),
    'Update article failure': props<{errors: IBackendErrors}>(),
  }
});
