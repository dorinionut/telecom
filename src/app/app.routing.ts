import { Routes } from '@angular/router';

import { CarrierListViewComponent } from './view/carrier-list/carrier-list.view';
import { CheckoutViewComponent } from './view/checkout/checkout.view';
import { PlanDetailsViewComponent } from './view/plan-details/plan-details.view';
import { PlanListViewComponent } from './view/plan-list/plan-list.view';
import { ThankYouViewComponent } from './view/thank-you/thank-you.view';

export const routes: Routes = [
  {path: 'checkout', component: CheckoutViewComponent},
  {path: 'thank-you', component: ThankYouViewComponent},
  {path: ':carrierID', component: PlanListViewComponent},
  {path: ':carrierID/:planID', component: PlanDetailsViewComponent},
  {path: '', component: CarrierListViewComponent},
  { path: '**', redirectTo: '' }
];
