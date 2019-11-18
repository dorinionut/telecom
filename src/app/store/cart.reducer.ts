import * as CartActions from './cart.actions';
import { ICartState } from '../model/cart.interface';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: ICartState = {
    carrier: undefined,
    plan: undefined,
    person: undefined,
    option: undefined
};

const _cartReducer = createReducer(initialState,
    on(CartActions.addCarrier, (state, {carrier}) => ({...state, carrier: carrier})),
    on(CartActions.addPlan, (state, {plan}) => ({...state, plan: plan})),
    on(CartActions.addOption, (state, {option}) => ({...state, option: option})),
    on(CartActions.addPerson, (state, {person}) => ({...state, person: person})),
    on(CartActions.clear, () => initialState)
)

export function cartReducer(state: ICartState | undefined, action: Action) {
    return _cartReducer(state, action);
}
