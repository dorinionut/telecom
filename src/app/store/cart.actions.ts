import { createAction, props } from '@ngrx/store';
import { ICarrier } from 'app/model/carrier.interface';
import { IPlan } from 'app/model/plan.interface';
import { IOption } from 'app/model/option.interface';
import { IPerson } from 'app/model/person.interface';

export const addCarrier = createAction('[Cart] Add carrier',
    props<{carrier: ICarrier}>()
)

export const addPlan = createAction('[Cart] Add plan',
    props<{plan: IPlan}>()
)

export const addOption = createAction('[Cart] Add option',
    props<{option: IOption}>()
)

export const addPerson = createAction('[Cart] Add person',
    props<{person: IPerson}>()
)

export const clear = createAction('[Cart] Clear cart')