import { Component, ElementRef, OnInit } from '@angular/core';

import { ICarrier } from '../../model/carrier.interface';
import { CarrierService } from '../../service/carrier.service';

@Component({
  host : {'(document:click)': 'checkFocus($event)'},
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.less']
})
export class MenuComponent implements OnInit {
  public menuVisible = false;
  public carriers: ICarrier[];

  constructor(
    private carrierService: CarrierService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.carrierService.list().subscribe(carriers => this.carriers = carriers);
  }

  checkFocus(event) {
    let clickedComponent = event.target;
    let inside = false;

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    }
    while (clickedComponent);

    if (!inside) {
      this.menuVisible = false;
    }
  }

  toggleMenuVisibility() {
    this.menuVisible = !this.menuVisible;
  }
}
