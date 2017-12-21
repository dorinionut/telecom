import { Routes } from '@angular/router';

import { CarrierListView } from './view/carrier-list/carrier-list.view';
import { CheckoutView } from './view/checkout/checkout.view';
import { PlanDetailsView } from './view/plan-details/plan-details.view';
import { PlanListView } from './view/plan-list/plan-list.view';
import { ThankYouView } from './view/thank-you/thank-you.view';

export const routes : Routes = [
  {path: 'checkout', component: CheckoutView},
  {path: 'thank-you', component: ThankYouView},
  {path: ':carrierID', component: PlanListView},
  {path: ':carrierID/:planID', component: PlanDetailsView},
  {path: '', component: CarrierListView},
  { path: '**', redirectTo: '' }
]
