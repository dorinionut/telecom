import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Carrier } from '../../model/carrier.model';
import { CartService } from '../../service/cart.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'thank-you',
  templateUrl: 'thank-you.view.html',
  styleUrls: ['thank-you.view.less']
})
export class ThankYouView implements OnInit {

  public carrier : Carrier;
  public person : Person;

  constructor (
    private cartService : CartService,
    private router : Router
  ) { }

  ngOnInit() {
    if(this.cartService.getCarrier() && this.cartService.getPerson()) {
      this.carrier = this.cartService.getCarrier();
      this.person = this.cartService.getPerson();
    }
    else {
      this.router.navigate(['']);
    }
  }
}
