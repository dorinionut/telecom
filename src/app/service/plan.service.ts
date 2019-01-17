import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { Plan } from '../model/plan.model';

@Injectable()
export class PlanService {
  private url = `${HttpService.baseURL}/plans`;

  constructor (
    private http : HttpService<Plan>
  ) {}

  get(id : string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list(queryParams : HttpParams) {
    return this.http.list(this.url, queryParams);
  }
}