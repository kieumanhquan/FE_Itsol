import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerJeService{
  private  readonly managerAPI = `${environment.apiUrl}auth/pageje`;

  constructor(private http: HttpClient) { }
  getJe(pram, pram1): Observable<any>{
    return this.http.get<any>(`${this.managerAPI}?pageNo=` + pram + `&pageSize=`+ pram1);
  }
  getJeSort(pram, pram1 , sort): Observable<any>{
    return this.http.get<any>(`${this.managerAPI}?pageNo=` + pram + `&pageSize=`+ pram1 + `&sort`+sort );
  }
}
