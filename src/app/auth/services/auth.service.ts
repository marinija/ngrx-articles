import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IRegisterRequest } from "../registerRequest.interface";
import { Observable, map } from "rxjs";
import { ICurrentUser } from "../../shared/types/current-user.interface";
import { IAuthResponse } from "../types/auth-response.interface";
import { environment } from "../../../environments/environment";
import { ILoginRequest } from "../login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser));
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }
}
