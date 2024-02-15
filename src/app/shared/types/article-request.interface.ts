export type ArticleRequestType = {
  title: string,
  description: string,
  body: string
  tagList: Array<string>;
}

export interface IArticleRequest {
  article: ArticleRequestType;
}
