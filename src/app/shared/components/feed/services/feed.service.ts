import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetFeedResponse } from "../types/get-feed-response.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<IGetFeedResponse>(fullUrl);
  }
}
