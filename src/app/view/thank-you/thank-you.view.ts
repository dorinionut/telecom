import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICarrier } from '../../model/carrier.interface';
import { ICartState } from '@app/model/cart.interface';
import { IPerson } from '../../model/person.interface';
import { CartFacade } from '@app/store/cart.facade';

@Component({
  selector: 'app-thank-you',
  templateUrl: 'thank-you.view.html',
  styleUrls: ['thank-you.view.less']
})
export class ThankYouViewComponent implements OnInit, OnDestroy {

  public carrier: ICarrier;
  public person: IPerson;

  private destroyed$: Subject<any> = new Subject();

  constructor (
    private cartFacade: CartFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartFacade.getCart()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((cart: ICartState) => {
        if (cart) {
          this.carrier = cart.carrier;
          this.person = cart.person;
        }
        else {
          this.router.navigate(['']);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
