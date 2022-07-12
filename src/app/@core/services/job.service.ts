import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private baseURL = `${environment.apiUrl}public/job`;

  constructor(private httpClient: HttpClient) { }

  getJobList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseURL}`);
  }

  createJob(job: Job): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, job);
  }

  getJobById(id: number): Observable<Job>{
    return this.httpClient.get<Job>(`${this.baseURL}/${id}`);
  }

  deleteJob(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
