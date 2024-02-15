import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PopularTagType } from "@shared/components/populat-tags/types/popular-tag.type";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { IGetPopularTagsResponse } from '../types/get-populat-tags-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PopulatTagService {
  constructor(private http: HttpClient) {}

  getPopulatTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<IGetPopularTagsResponse>(url).pipe(map(r => r.tags));
  }
}
