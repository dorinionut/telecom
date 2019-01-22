import { ActionReducerMap } from '@ngrx/store';

import { cartReducer } from './cart.reducer';

export const AppReducers: ActionReducerMap<any> = {
    cart: cartReducer
}