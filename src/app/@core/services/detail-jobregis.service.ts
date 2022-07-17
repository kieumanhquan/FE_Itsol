import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import any = jasmine.any;

@Injectable({
  providedIn: 'root',
})
export class DetailJobregisService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: 'my-auth-token',
    }),
  };
  private readonly baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient, private router: Router) {
  }

  sendMail(param, form: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}sendjobregis?id=` + param, form, this.httpOptions);
  }
}
