import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { Carrier } from '../../model/carrier.model';
import { CarrierService } from '../../service/carrier.service';
import { CartService } from '../../service/cart.service';
import { Option } from '../../model/option.model';
import { Plan } from '../../model/plan.model';
import { PlanService } from '../../service/plan.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'app/model/app-state.interface';
import { Observable } from 'rxjs';
import { AppFacade } from 'app/store/app.facade';

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
    private appFacade: AppFacade,
    private planService : PlanService,
    private carrierService : CarrierService,
    private router : Router,
    private store: Store<any>
  ) {}

  ngOnInit() {
    let planID = '';
    let carrierID = '';

    this.activatedRoute.paramMap.subscribe(paramMap => {
      carrierID = paramMap.get('carrierID');
      planID = paramMap.get('planID');

      if(planID && carrierID) {
        let queryParams = new HttpParams()
          .append('id', planID)
          .append('carrier', carrierID);

        this.planService.list(queryParams).subscribe(plans => {
          if(plans.length) {
            this.plan = plans[0];
          }
          else {
            this.router.navigate(['']);
          }
        },
        err => this.router.navigate(['']));

        this.carrierService.get(carrierID).subscribe(carrier => this.carrier = carrier);
      }
      else {
        this.router.navigate(['']);
      }
    });

    this.store
      .select('app')
      .subscribe(state => {
        if(state) {
          this.option = state.option;
        }
      });
  }

  setOption(option : Option) {
    this.appFacade.addOption(option);
  }
}