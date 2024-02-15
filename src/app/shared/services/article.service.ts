import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IArticle } from "@shared/components/feed/types/article.interface";
import { IArticleResponse } from "@shared/types/article-response.interface";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<IArticleResponse>(fullUrl).pipe(map(r => r.article));
  }
}
