import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICarrier } from '../../model/carrier.interface';
import { emailValidator } from '../../util/email.validator';
import { IOption } from '../../model/option.interface';
import { IPlan } from '../../model/plan.interface';
import { CartFacade } from '@app/store/cart.facade';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.view.html',
  styleUrls: ['checkout.view.less']
})
export class CheckoutViewComponent implements OnInit, OnDestroy {

  public carrier: ICarrier;
  public option: IOption;
  public personForm: FormGroup;
  public plan: IPlan;
  public showPlanDetails: boolean = false;
  public showOptionDetails: boolean = false;
  public totalMonthlyCost: number;

  private destroyed$: Subject<any> = new Subject();

  constructor (
    private formBuilder: FormBuilder,
    private cartFacade: CartFacade,
    private router: Router
  ) {}

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [
          Validators.required,
          emailValidator
        ]
      ],
      phone: [null]
    });

    this.cartFacade.getCart()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(state => {
        if (state) {
          this.carrier = state.carrier;
          this.plan = state.plan;
          this.option = state.option;
          this.updateTotalMonthlyCost();
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

  submitOrder() {
    const controlNames = Object.keys(this.personForm.controls);
    controlNames.forEach((control: string) => this.personForm.get(control).markAsDirty());

    if (this.personForm.valid) {
      this.cartFacade.addPerson(this.personForm.value);
      this.router.navigate(['thank-you']);
    }
  }

  toggleOptionDetails() {
    this.showOptionDetails = !this.showOptionDetails;
  }

  togglePlanDetails() {
    this.showPlanDetails = !this.showPlanDetails;
  }

  updateTotalMonthlyCost() {
    if (this.plan) {
      this.totalMonthlyCost = (this.option) ? this.option.monthlyCost + this.plan.monthlyCost : this.plan.monthlyCost;
    }
  }
}
