import { Action } from '@ngrx/store';
import { Carrier } from 'app/model/carrier.model';
import { Plan } from 'app/model/plan.model';
import { Option } from 'app/model/option.model';

export enum CartActionsType {
    addCarrier = '[Cart] Add carrier',
    addPlan = '[Cart] Add plan',
    addOption = '[Cart] Add option',
    clear = '[Cart] Clear cart'
}

export class addCarrier implements Action {
    readonly type = CartActionsType.addCarrier;

    constructor(public payload: Carrier){}
}

export class addPlan implements Action {
    readonly type = CartActionsType.addPlan;

    constructor(public payload: Plan){}
}

export class addOption implements Action {
    readonly type = CartActionsType.addOption;

    constructor(public payload: Option){}
}

export class clear implements Action {
    readonly type = CartActionsType.clear;
}

export type CartActions =
    | addCarrier
    | addPlan
    | addOption
    | clear;