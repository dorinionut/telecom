import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable()
export class PlanService {
  private url = `${HttpService.baseURL}/plans`;

  constructor (
    private http : HttpService<any>
  ) {}

  get(id : string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list(queryParams : HttpParams) {
    return this.http.get(this.url, queryParams);
  }
}