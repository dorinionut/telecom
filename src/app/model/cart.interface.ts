import { IPlan } from './plan.interface';
import { ICarrier } from './carrier.interface';
import { IOption } from './option.interface';
import { IPerson } from './person.interface';

export interface ICartState {
    carrier: ICarrier;
    plan: IPlan;
    option: IOption;
    person: IPerson;
}