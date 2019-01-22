import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import { ICartState } from 'app/model/cart.interface';
import { Carrier } from 'app/model/carrier.model';
import { Plan } from 'app/model/plan.model';
import { Option } from 'app/model/option.model';
import * as CartActions from "./cart.actions";

@Injectable()
export class CartFacade {
    constructor(
        public store: Store<ICartState>
    ){}

    addCarrier(carrier: Carrier) {
        this.store.dispatch(new CartActions.addCarrier(carrier));
    }

    addPlan(plan: Plan) {
        this.store.dispatch(new CartActions.addPlan(plan));
    }

    addOption(option: Option) {
        this.store.dispatch(new CartActions.addOption(option));
    }

    clear() {
        this.store.dispatch(new CartActions.clear());
    }
}
