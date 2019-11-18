import { ActionReducerMap } from '@ngrx/store';

import { cartReducer } from './cart.reducer';
import { ICartState } from 'app/model/cart.interface';

export interface ITelecomStore {
    cart: ICartState;
}

export const AppReducers: ActionReducerMap<ITelecomStore> = {
    cart: cartReducer
};
