import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Job} from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class SearchjobService {

  private readonly baseUrl = `${environment.apiUrl}public/searchJob`;

  constructor(private httpClient: HttpClient) { }

  getJobList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseUrl}`);
  }

}
