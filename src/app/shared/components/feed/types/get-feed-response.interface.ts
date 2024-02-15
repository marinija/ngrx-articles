import { IArticle } from "./article.interface";

export interface IGetFeedResponse {
  articles: Array<IArticle>;
  articlesCount: number;
}
