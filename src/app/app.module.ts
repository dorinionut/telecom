import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CarrierListViewComponent } from './view/carrier-list/carrier-list.view';
import { CheckoutViewComponent } from './view/checkout/checkout.view';
import { DataService } from './service/data.service';
import { MenuComponent } from './component/menu/menu.component';
import { OptionListComponent } from './component/option-list/option-list.component';
import { PlanDetailsViewComponent } from './view/plan-details/plan-details.view';
import { PlanListViewComponent } from './view/plan-list/plan-list.view';
import { ThankYouViewComponent } from './view/thank-you/thank-you.view';

import { routes } from './app.routing';
import { AppReducers } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarrierListViewComponent,
    CheckoutViewComponent,
    MenuComponent,
    OptionListComponent,
    PlanDetailsViewComponent,
    PlanListViewComponent,
    ThankYouViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
