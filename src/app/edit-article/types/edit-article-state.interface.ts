import { IArticle } from "@shared/components/feed/types/article.interface";
import { IBackendErrors } from "@shared/types/backend-errors.interface";

export interface IEditArticleState {
  article: IArticle | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
