import { Action } from '@ngrx/store';
import { Carrier } from 'app/model/carrier.model';
import { Plan } from 'app/model/plan.model';
import { Option } from 'app/model/option.model';

export enum AppActionTypes {
    addCarrier = '[Carrier] Add carrier',
    addPlan = '[Plan] Add plan',
    addOption = '[option] Add option'
}

export class addCarrier implements Action {
    readonly type = AppActionTypes.addCarrier;

    constructor(public payload: Carrier){}
}

export class addPlan implements Action {
    readonly type = AppActionTypes.addPlan;

    constructor(public payload: Plan){}
}

export class addOption implements Action {
    readonly type = AppActionTypes.addOption;

    constructor(public payload: Option){}
}

export type AppActions =
    | addCarrier
    | addPlan
    | addOption;