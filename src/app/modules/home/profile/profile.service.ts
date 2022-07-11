import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {User} from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private readonly profileAPI = `${environment.apiUrl}auth/getuser/`;


  constructor(private http: HttpClient) { }

  getProfile(username: any): Observable<any>{
    return this.http.get<any>(this.profileAPI + username);
  }


}
