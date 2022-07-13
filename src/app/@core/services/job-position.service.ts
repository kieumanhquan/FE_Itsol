import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {JobPosition} from '../models/job-position';


@Injectable({
  providedIn: 'root',
})
export class JobPositionSerice {

  private baseURL = `${environment.apiUrl}public/job-position`;

  constructor(private httpClient: HttpClient) { }

  getJobPositionList(): Observable<JobPosition[]>{
    return this.httpClient.get<JobPosition[]>(`${this.baseURL}`);
  }

  getJobById(id: number): Observable<JobPosition>{
    return this.httpClient.get<JobPosition>(`${this.baseURL}/${id}`);
  }


}
