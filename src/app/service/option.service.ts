import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { IOption } from '../model/option.interface';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private url = `${HttpService.baseURL}/options`;

  constructor (
    private http: HttpService<IOption>
  ) {}

  get(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list(queryParams: HttpParams) {
    return this.http.list(this.url, queryParams);
  }
}
