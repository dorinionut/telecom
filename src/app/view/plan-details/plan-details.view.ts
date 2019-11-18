import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { ICarrier } from '../../model/carrier.interface';
import { CarrierService } from '../../service/carrier.service';
import { IOption } from '../../model/option.interface';
import { IPlan } from '../../model/plan.interface';
import { PlanService } from '../../service/plan.service';
import { CartFacade } from 'app/store/cart.facade';
import { zip, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-plan-details',
  templateUrl: 'plan-details.view.html',
  styleUrls: ['plan-details.view.less']
})
export class PlanDetailsViewComponent implements OnInit, OnDestroy {

  public carrier: ICarrier;
  public option: IOption;
  public plan: IPlan;

  private destroyed$: Subject<any> = new Subject();

  constructor (
    private activatedRoute: ActivatedRoute,
    private cartFacade: CartFacade,
    private planService: PlanService,
    private carrierService: CarrierService,
    private router: Router
  ) {}

  ngOnInit() {
    let planID = '';
    let carrierID = '';

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      carrierID = paramMap.get('carrierID');
      planID = paramMap.get('planID');

      if (planID && carrierID) {
        zip(
          this.carrierService.get(carrierID),
          this.planService.get(planID)
        )
        .subscribe(([carrier, plan]: [ICarrier, IPlan]) => {
          if (!carrier || !plan) {
            this.router.navigate(['']);
            return;
          }

          this.carrier = carrier;
          this.cartFacade.addCarrier(this.carrier);

          this.plan = plan;
          this.cartFacade.addPlan(plan);
        });
      }
      else {
        this.router.navigate(['']);
      }
    });

    this.cartFacade.getOption()
      .pipe(
        // takeUntil(this.destroyed$)
      )
      .subscribe((option: IOption) => this.option = option);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  setOption(option: IOption) {
    this.cartFacade.addOption(option);
  }
}
