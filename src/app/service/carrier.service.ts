import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICarrier } from '../model/carrier.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  private url = `${HttpService.baseURL}/carriers`;

  constructor ( private http: HttpService<ICarrier>) {}

  get(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list() {
    return this.http.list(this.url);
  }
}
