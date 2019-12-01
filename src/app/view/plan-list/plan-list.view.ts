import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { zip } from 'rxjs';

import { IPlan } from '../../model/plan.interface';
import { ICarrier } from '@app/model/carrier.interface';
import { CarrierService } from '../../service/carrier.service';
import { PlanService } from '../../service/plan.service';
import { CartFacade } from '@app/store/cart.facade';

@Component({
  selector: 'app-plan-list',
  templateUrl: 'plan-list.view.html',
  styleUrls: ['plan-list.view.less']
})
export class PlanListViewComponent implements OnInit {

  public carrier: ICarrier;
  public plans: IPlan[] = [];

  constructor (
    private activatedRoute: ActivatedRoute,
    private carrierService: CarrierService,
    private cartFacade: CartFacade,
    private planService: PlanService,
    private router: Router
  ) {  }

  addToCart(plan: IPlan) {
    this.cartFacade.addPlan(plan);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const carrierID = paramMap.get('carrierID');

      if (carrierID) {
        const queryParams = new HttpParams().append('carrier', carrierID);

        zip(
          this.carrierService.get(carrierID),
          this.planService.list(queryParams)
        )
        .subscribe(([carrier, plans]: [ICarrier, IPlan[]]) => {
          if(!carrier || !plans) {
            this.router.navigate(['']);
            return;
          }

          this.carrier = carrier;
          this.cartFacade.addCarrier(this.carrier);

          this.plans = plans;
        });
      }
      else {
        this.router.navigate(['']);
      }
    });
  }
}
