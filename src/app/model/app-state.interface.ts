import { Plan } from './plan.model';
import { Carrier } from './carrier.model';
import { Option } from './option.model';

export interface IAppState {
    carrier: Carrier;
    plan: Plan;
    option: Option;
}