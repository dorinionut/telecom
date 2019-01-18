import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Carrier } from '../../model/carrier.model';
import { CarrierService } from '../../service/carrier.service';
import { AppFacade } from 'app/store/app.facade';

@Component({
  selector: 'carrier-list',
  templateUrl: 'carrier-list.view.html',
  styleUrls: ['carrier-list.view.less']
})
export class CarrierListView implements OnInit {

  public carriers : Carrier[] = [];

  constructor (
    private appFacade : AppFacade,
    private carrierService : CarrierService,
    private router : Router
  ) {  }

  ngOnInit() {
    this.carrierService.list().subscribe(carriers => this.carriers = carriers);
  }

  addToCart(carrier: Carrier) {
    this.appFacade.addCarrier(carrier);
  }
}
