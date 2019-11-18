import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { IPlan } from '../model/plan.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private url = `${HttpService.baseURL}/plans`;

  constructor (
    private http: HttpService<IPlan>
  ) {}

  get(id: string): Observable<IPlan> {
    return this.http.get(`${this.url}/${id}`);
  }

  list(queryParams: HttpParams): Observable<IPlan[]> {
    return this.http.list(this.url, queryParams);
  }
}
