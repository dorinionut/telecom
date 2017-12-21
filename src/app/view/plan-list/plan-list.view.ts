import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Plan } from '../../model/plan.model';
import { PlanService } from '../../service/plan.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'plan-list',
  templateUrl: 'plan-list.view.html',
  styleUrls: ['plan-list.view.less']
})
export class PlanListView implements OnInit {

  public carrierID : string;
  public plans : Plan[] = [];

  constructor (
    private activatedRoute : ActivatedRoute,
    private planService : PlanService,
    private cartService : CartService,
    private router : Router
  ) {  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(paramMap.get('carrierID')) {
        this.carrierID = paramMap.get('carrierID');

        this.planService.list(new HttpParams().append('carrier', this.carrierID)).subscribe(plans => this.plans = plans);
      }
      else {
        this.router.navigate(['carriers']);
      }
    });
  }
}
