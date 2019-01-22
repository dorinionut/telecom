import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Carrier } from '../../model/carrier.model';
import { CarrierService } from '../../service/carrier.service';
import { Option } from '../../model/option.model';
import { Plan } from '../../model/plan.model';
import { PlanService } from '../../service/plan.service';
import { CartFacade } from 'app/store/cart.facade';
import { ICartState } from 'app/model/cart.interface';
import { Store } from '@ngrx/store';
import { concat } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'plan-details',
  templateUrl: 'plan-details.view.html',
  styleUrls: ['plan-details.view.less']
})
export class PlanDetailsView implements OnInit {

  public carrier : Carrier;
  public plan : Plan;
  private option : Option;

  constructor (
    private activatedRoute : ActivatedRoute,
    private cartFacade: CartFacade,
    private planService : PlanService,
    private carrierService : CarrierService,
    private router : Router,
    private store : Store<ICartState>
  ) {}

  ngOnInit() {
    let planID = '';
    let carrierID = '';

    this.activatedRoute.paramMap.subscribe(paramMap => {
      carrierID = paramMap.get('carrierID');
      planID = paramMap.get('planID');

      if(planID && carrierID) {
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
              
              return this.planService.get(planID);
            })
          )
          .subscribe(plan => {
            if(plan){
              this.plan = plan;
              this.cartFacade.addPlan(this.plan);
            }
            else {
              this.router.navigate(['']);
            }
        });
      }
      else {
        this.router.navigate(['']);
      }
    });

    this.store
      .select('cart')
      .subscribe(state => {
        if(state) {
          this.option = state.option;
        }
      });
  }

  setOption(option : Option) {
    this.cartFacade.addOption(option);
  }
}