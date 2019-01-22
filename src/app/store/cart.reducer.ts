import * as CartActions from './cart.actions';
import { ICartState } from '../model/cart.interface';

export const initialState: ICartState = {
    carrier: undefined,
    plan: undefined,
    option: undefined
}

export function cartReducer(state = initialState, action: CartActions.CartActions): ICartState {
    switch(action.type){
        case CartActions.CartActionsType.addCarrier:
            return {...state, carrier: action.payload};

        case CartActions.CartActionsType.addPlan:
            return {...state, plan: action.payload};

        case CartActions.CartActionsType.addOption:
            return {...state, option: action.payload};

        case CartActions.CartActionsType.clear:
            return initialState;
    }
}