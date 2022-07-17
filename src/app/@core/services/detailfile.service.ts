import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailfileService {
  private readonly baseUrl = `${environment.apiUrl}`;
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  getDetailFile(param): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${this.baseUrl}detailfile?id=` + param);
  }

  changeBrowse(param): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}browser?id=` + param, this.httpOptions);
  }
  changeRefuse(param,reason): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}refuse?id=` + param + `&reason=` + reason, this.httpOptions);
  }
  changeSuccess(param): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}successfull?id=` + param, this.httpOptions);
  }
}
