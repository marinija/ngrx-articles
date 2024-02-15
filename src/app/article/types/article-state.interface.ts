import { IArticle } from "@shared/components/feed/types/article.interface";

export interface IArticleState {
  isLoading: boolean;
  error: string | null;
  data: IArticle | null;
}
