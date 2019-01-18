import { Injectable } from '@angular/core';
import * as AppActions from "./app.actions";
import { Store } from "@ngrx/store";
import { IAppState } from 'app/model/app-state.interface';
import { Carrier } from 'app/model/carrier.model';
import { Plan } from 'app/model/plan.model';
import { Option } from 'app/model/option.model';

@Injectable()
export class AppFacade {
    constructor(
        public store: Store<IAppState>
    ){}

    addCarrier(carrier: Carrier) {
        this.store.dispatch(new AppActions.addCarrier(carrier));
    }

    addPlan(plan: Plan) {
        this.store.dispatch(new AppActions.addPlan(plan));
    }

    addOption(option: Option) {
        this.store.dispatch(new AppActions.addOption(option));
    }
}
