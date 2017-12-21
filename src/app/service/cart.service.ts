import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Carrier } from '../model/carrier.model';
import { CarrierService } from '../service/carrier.service';
import { Option } from '../model/option.model';
import { OptionService } from '../service/option.service';
import { Person } from '../model/person.model';
import { Plan } from '../model/plan.model';
import { PlanService } from '../service/plan.service';

@Injectable()
export class CartService {

  public carrier : Carrier;
  public option : Option;
  public person : Person;
  public plan : Plan;

  constructor() {  }
}
