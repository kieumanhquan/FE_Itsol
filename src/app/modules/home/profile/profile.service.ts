import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ProfileService {
private  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type':  'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: 'my-auth-token',
    }),
  };
  private readonly profileAPI = `${environment.apiUrl}auth/getuser/`;
  private readonly profileAPI1 = `${environment.apiUrl}auth/update/`;

  constructor(private http: HttpClient) { }


  getProfile(username: any): Observable<any>{
    return this.http.get<any>(this.profileAPI + username);
  }

  updateUser(id: any, user: any): Observable<any>{
    return  this.http.put(this.profileAPI1 + id,user,this.httpOptions);
  }
}
