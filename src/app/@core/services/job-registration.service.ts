import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobRegistrationService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: 'my-auth-token',
    }),
  };
  private readonly baseUrl = `${environment.apiUrl}`;
  private readonly profileAPI = `${environment.apiUrl}auth/getuser/`;

  constructor(private http: HttpClient, private router: Router) {
  }

  // regisJob(param, file: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}registration?userName=` + param, file, this.httpOptions);
  // }

  regisJob(file: File, param): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}registration?userName=` + param, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }
  getProfile(username: any): Observable<any>{
    return this.http.get<any>(this.profileAPI + username);
  }
}
