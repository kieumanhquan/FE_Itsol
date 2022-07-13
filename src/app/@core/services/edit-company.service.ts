import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// @ts-ignore
import { Company } from '../model/company';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private readonly baseUrl = `${environment.apiUrl}public/edit_intro_company`;
  // public getAll(): Observable<any>{
  //   return this.http.get(this.API_URL)
  // }
  public getAll(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl+'all'}`);
  }
  // public update(id:number,data:any): Observable<any>{
  //   return this.http.put(this.API_URL+id, data)
  // }
  public updateById(company: Company,id: number): Observable<Company[]>{
    return this.http.put<Company[]>(this.baseUrl + 'updateCompany/' + id, company);
  }
  public getCompanyById(id: number) {
    return this.http.get<Company>(`${this.baseUrl + 'getCompanyByID'}/${id}`);
  }
}
