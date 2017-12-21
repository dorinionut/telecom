import { Component, ElementRef, OnInit } from '@angular/core';

import { Carrier } from '../../model/carrier.model';
import { CarrierService } from '../../service/carrier.service';

@Component({
  host : {'(document:click)': 'checkFocus($event)'},
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.less']
})
export class MenuComponent implements OnInit {
  public elementRef;
  public menuVisible = false;
  public carriers : Carrier[];

  constructor(
    private carrierService : CarrierService,
    private thisElement : ElementRef
  ) {
    this.elementRef = thisElement;
  }

  checkFocus(event){
    let clickedComponent = event.target;
    let inside = false;

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    }
    while (clickedComponent);

    if(!inside){
      this.menuVisible = false;
    }
  }

  ngOnInit() {
    this.carrierService.list().subscribe(carriers => this.carriers = carriers);
  }
}
