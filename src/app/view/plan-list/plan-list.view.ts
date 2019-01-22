import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Plan } from '../../model/plan.model';
import { CarrierService } from '../../service/carrier.service';
import { PlanService } from '../../service/plan.service';
import { CartFacade } from 'app/store/cart.facade';
import { Carrier } from 'app/model/carrier.model';

@Component({
  selector: 'plan-list',
  templateUrl: 'plan-list.view.html',
  styleUrls: ['plan-list.view.less']
})
export class PlanListView implements OnInit {

  public carrier : Carrier;
  public plans : Plan[] = [];

  constructor (
    private activatedRoute : ActivatedRoute,
    private carrierService: CarrierService,
    private cartFacade: CartFacade,
    private planService : PlanService,
    private router : Router
  ) {  }

  addToCart(plan: Plan) {
    this.cartFacade.addPlan(plan);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(paramMap.get('carrierID')) {
        let carrierID = paramMap.get('carrierID');
        let queryParams = new HttpParams().append('carrier', carrierID);

        this.carrierService
          .get(carrierID)
          .pipe(
            switchMap(carrier => {
              if(carrier){
                this.carrier = carrier;
                this.cartFacade.addCarrier(this.carrier);
              }
              else {
                this.router.navigate(['']);
              }

              return this.planService.list(queryParams);
            })
          )
          .subscribe(plans => {
            if(plans.length){
              this. plans = plans;
            }
            else {
              this.router.navigate(['']);
            }
          })
      }
      else {
        this.router.navigate(['']);
      }
    });
  }
}
