import { Component, OnInit } from '@angular/core';

import { ICarrier } from '../../model/carrier.interface';
import { CarrierService } from '../../service/carrier.service';
import { CartFacade } from 'app/store/cart.facade';

@Component({
  selector: 'app-carrier-list',
  templateUrl: 'carrier-list.view.html',
  styleUrls: ['carrier-list.view.less']
})
export class CarrierListViewComponent implements OnInit {

  public carriers: ICarrier[] = [];

  constructor (
    private cartFacade: CartFacade,
    private carrierService: CarrierService
  ) {  }

  ngOnInit() {
    this.cartFacade.clear();

    this.carrierService
      .list()
      .subscribe(carriers => this.carriers = carriers);
  }

  addToCart(carrier: ICarrier) {
    this.cartFacade.addCarrier(carrier);
  }
}
