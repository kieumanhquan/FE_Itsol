import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({}),
};

@Injectable({
  providedIn: 'root',
})
export class JobregisterService {
  private httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Access-Control-Allow-Origin' :' *',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Access-Control-Allow-Headers' : 'Origin,X-Requested-With,Content-Type,Accept',
    }),
  };
  private readonly baseUrl = `${environment.apiUrl}`;

  // @ts-ignore


  constructor(private http: HttpClient, private router: Router) {
  }

  getJobRegister(param, param1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}job-register?pageNo=` + param + `&pageSize=` + param1);
  }

  public getListSort(param, param1, sort, type): Observable<any> {

    // eslint-disable-next-line max-len
    return this.http.get(`${this.baseUrl}job-register?pageNo=` + param + `&pageSize=` + param1 + `&sort=` + sort + `&type=` + type);
  }

  updateJobRegisdetail(inter): Observable<any> {
    return this.http.post(`${this.baseUrl}bookinter?id=` + inter, this.httpOptions);
  }
  getTotal(): Observable<any> {
    return this.http.get(`${this.baseUrl}total` );
  }
}
