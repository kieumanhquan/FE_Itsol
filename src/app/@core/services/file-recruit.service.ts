import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';
import {Filerecruit} from '../../modules/home/filerecruit/filerecruit';

const httpOptions = {
  headers: new HttpHeaders({
    // // eslint-disable-next-line @typescript-eslint/naming-convention
    // 'Content-Type': 'application/json',
    // // eslint-disable-next-line @typescript-eslint/naming-convention
    // 'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FileRecruitService {
  private readonly baseUrl = `${environment.apiUrl}`;

  // private readonly baseUrl = 'localhost:9090/api/file-recruit';
  constructor(private http: HttpClient, private router: Router) {
  }

  getFileRecruit(): Observable<any> {
     return this.http.get<Filerecruit[]>(`${this.baseUrl}file-recruit`);
  }
  findName(): Observable<any> {
    return this.http.get<Filerecruit[]>(`${this.baseUrl}find-name`);
  }
}
