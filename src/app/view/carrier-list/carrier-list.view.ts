import { Component, OnInit } from '@angular/core';

import { Carrier } from '../../model/carrier.model';
import { CarrierService } from '../../service/carrier.service';
import { CartFacade } from 'app/store/cart.facade';

@Component({
  selector: 'carrier-list',
  templateUrl: 'carrier-list.view.html',
  styleUrls: ['carrier-list.view.less']
})
export class CarrierListView implements OnInit {

  public carriers : Carrier[] = [];

  constructor (
    private cartFacade : CartFacade,
    private carrierService : CarrierService
  ) {  }

  ngOnInit() {
    this.cartFacade.clear();
    this.carrierService
      .list()
      .subscribe(carriers => this.carriers = carriers);
  }

  addToCart(carrier: Carrier) {
    this.cartFacade.addCarrier(carrier);
  }
}
