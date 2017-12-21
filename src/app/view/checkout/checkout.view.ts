import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Carrier } from '../../model/carrier.model';
import { CartService } from '../../service/cart.service';
import { emailValidator } from '../../util/email.validator';
import { Option } from '../../model/option.model';
import { Person } from '../../model/person.model';
import { Plan } from '../../model/plan.model';

@Component({
  selector: 'checkout',
  templateUrl: 'checkout.view.html',
  styleUrls: ['checkout.view.less']
})
export class CheckoutView implements OnInit {

  private carrier : Carrier;
  public plan : Plan;
  private person : Person = new Person();
  private personalInfo: FormGroup;
  public option : Option;
  private totalMonthlyCost : number;
  private showOptionDetails : false;
  private showPlanDetails : false;

  constructor (
    private formBuilder : FormBuilder,
    private cartService : CartService,
    private router : Router
  ) {
    this.personalInfo = formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [
          Validators.required,
          emailValidator
        ]
      ],
      'phone': [null]
    });
  }

  ngOnInit() {
    if(this.cartService.carrier && this.cartService.plan) {
      this.carrier = this.cartService.carrier;
      this.plan = this.cartService.plan;

      if(this.cartService.option) {
        this.option = this.cartService.option;
      }

      this.updateTotalMonthlyCost();
    }
    else {
      this.router.navigate(['']);
    }
  }

  submitOrder() {
    for(let control in this.personalInfo.controls) {
      this.personalInfo.controls[control].markAsDirty();
    }

    if(this.personalInfo.valid) {
      this.cartService.person = this.person;
      this.router.navigate(['thank-you']);
    }
  }

  updateTotalMonthlyCost() {
    if(this.plan) {
      this.totalMonthlyCost = (this.option) ? this.option.monthlyCost + this.plan.monthlyCost : this.plan.monthlyCost
    }
  }
}
