import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CarrierService } from './service/carrier.service';
import { CartService } from './service/cart.service';
import { CarrierListView } from './view/carrier-list/carrier-list.view';
import { CheckoutView } from './view/checkout/checkout.view';
import { DataService } from './service/data.service';
import { HttpService } from './service/http.service';
import { MenuComponent } from './component/menu/menu.component';
import { OptionService } from './service/option.service';
import { OptionListComponent } from './component/option-list/option-list.component';
import { PlanService } from './service/plan.service';
import { PlanDetailsView } from './view/plan-details/plan-details.view';
import { PlanListView } from './view/plan-list/plan-list.view';
import { ThankYouView } from './view/thank-you/thank-you.view';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CarrierListView,
    CheckoutView,
    MenuComponent,
    OptionListComponent,
    PlanDetailsView,
    PlanListView,
    ThankYouView
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
    CarrierService,
    CartService,
    OptionService,
    PlanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
