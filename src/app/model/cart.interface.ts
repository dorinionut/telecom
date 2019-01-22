import { Plan } from './plan.model';
import { Carrier } from './carrier.model';
import { Option } from './option.model';

export interface ICartState {
    carrier: Carrier;
    plan: Plan;
    option: Option;
}