import { ITelecomStore } from './app.reducer';
import { ICartState } from '@app/model/cart.interface';
import { createSelector } from '@ngrx/store';

export const selectCart = (state: ITelecomStore) => state.cart;

export const selectCarrier = createSelector(
  selectCart,
  (cart: ICartState) => cart.carrier
);

export const selectPlan = createSelector(
  selectCart,
  (cart: ICartState) => cart.plan
);

export const selectOption = createSelector(
  selectCart,
  (cart: ICartState) => cart.option
);

export const selectPerson = createSelector(
  selectCart,
  (cart: ICartState) => cart.person
);
