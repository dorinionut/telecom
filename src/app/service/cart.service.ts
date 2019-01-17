import { Injectable } from '@angular/core';

import { Carrier } from '../model/carrier.model';
import { Option } from '../model/option.model';
import { Person } from '../model/person.model';
import { Plan } from '../model/plan.model';

@Injectable()
export class CartService {

  public carrier : Carrier;
  public option : Option;
  public person : Person;
  public plan : Plan;

  constructor() {  }
}
