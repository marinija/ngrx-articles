import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IArticle } from "@shared/components/feed/types/article.interface";
import { IArticleRequest } from "@shared/types/article-request.interface";
import { IArticleResponse } from "@shared/types/article-response.interface";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string, articleRequest: IArticleRequest): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.put<IArticleResponse>(fullUrl, articleRequest).pipe(map(res => res.article))
  }
}
