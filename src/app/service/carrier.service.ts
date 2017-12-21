import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Carrier } from '../model/carrier.model';

@Injectable()
export class CarrierService {
  private url = `${HttpService.baseURL}/carriers`;

  constructor ( private http : HttpService<any>) {}

  get(id : string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list() {
    return this.http.get(this.url);
  }
}