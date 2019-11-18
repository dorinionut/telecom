import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ICartState } from 'app/model/cart.interface';
import { ICarrier } from 'app/model/carrier.interface';
import { IPlan } from 'app/model/plan.interface';
import { IOption } from 'app/model/option.interface';
import * as CartActions from './cart.actions';
import { selectCart, selectPlan, selectOption, selectPerson } from './cart.selectors';
import { Observable } from 'rxjs';
import { IPerson } from 'app/model/person.interface';
import { ITelecomStore } from './app.reducer';

@Injectable({
    providedIn: 'root'
})
export class CartFacade {
    constructor(
        public store: Store<ITelecomStore>
    ) {}

    addCarrier(carrier: ICarrier): void {
        this.store.dispatch(CartActions.addCarrier({carrier}));
    }

    addPlan(plan: IPlan): void {
        this.store.dispatch(CartActions.addPlan({plan}));
    }

    addOption(option: IOption): void {
        this.store.dispatch(CartActions.addOption({option}));
    }

    addPerson(person: IPerson): void {
        this.store.dispatch(CartActions.addPerson({person}));
    }

    clear(): void {
        this.store.dispatch(CartActions.clear());
    }

    getCart(): Observable<ICartState> {
        return this.store.select(selectCart);
    }

    getPlan(): Observable<IPlan> {
        return this.store.select(selectPlan);
    }

    getOption(): Observable<IOption> {
        return this.store.select(selectOption);
    }

    getPerson(): Observable<IPerson> {
        return this.store.select(selectPerson);
    }
}
