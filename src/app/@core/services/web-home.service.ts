import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Job} from '../models/job';
import {searchJob} from '../models/searchJob';
import {ResponseData} from '../models/ResponseData';

@Injectable({
  providedIn: 'root',
})
export class WebHomeService {

  private readonly baseUrl = `${environment.apiUrl}public/itsol_recruitment`;

  constructor(private httpClient: HttpClient) { }

  getJobList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseUrl}`);
  }
  getAllJob() {
    return this.httpClient.get<any>(this.baseUrl + 'getAll');
  }
  public getJobById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(`${this.baseUrl+'getJob'}/${id}`, {
      params: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        IdNumber: id,
      },
    });
  }

  public getAllJobPage(
    pageN: number,
    pageS: number,
  ): Observable<ResponseData> {
    return this.httpClient.get<ResponseData>(`${this.baseUrl+'getAllPage'}`, {
      params: {
        pageNumber: pageN,
        pageSize: pageS,
      },
    });
  }

  public searchJobs(search: searchJob): Observable<Job[]>{
    return this.httpClient.post<Job[]>(`${this.baseUrl+'search'}`, search);
  }

}
