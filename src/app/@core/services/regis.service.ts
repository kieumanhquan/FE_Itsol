import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RegisService {
  private readonly baseUrl = `${environment.apiUrl}auth/signup`;

  constructor(private http: HttpClient, private router: Router) { }

  public regis(body: any) {
    console.log(JSON.stringify(body));
    return this.http.post(`${this.baseUrl}`, body).toPromise();
  }
}
