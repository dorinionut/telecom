import { Injectable } from '@angular/core';

import { Carrier } from '../model/carrier.model';
import { Option } from '../model/option.model';
import { Person } from '../model/person.model';
import { Plan } from '../model/plan.model';

@Injectable()
export class CartService {

  private carrier : Carrier;
  private option : Option;
  private person : Person;
  private plan : Plan;

  constructor() {  }

  getCarrier(){
    return this.carrier;
  }

  setCarrier(carrier: Carrier){
    this.carrier = carrier;
  }

  getPlan(){
    return this.plan;
  }

  setPlan(plan: Plan){
    this.plan = plan;
  }

  getOption(){
    return this.option;
  }

  setOption(option: Option){
    this.option = option;
  }

  getPerson(){
    return this.person;
  }

  setPerson(person: Person){
    this.person = person;
  }
}
