import * as AppActions from './app.actions';
import { IAppState } from '..//model/app-state.interface';
import { ActionReducerMap } from '@ngrx/store';

export const initialState: IAppState = {
    carrier: undefined,
    plan: undefined,
    option: undefined
}

function reducer(state = initialState, action: AppActions.AppActions): IAppState {
    switch(action.type){
        case AppActions.AppActionTypes.addCarrier:
            return {...state, carrier: action.payload};

        case AppActions.AppActionTypes.addPlan:
            return {...state, plan: action.payload};

        case AppActions.AppActionTypes.addOption:
            return {...state, option: action.payload};
    }
}

export const AppReducers: ActionReducerMap<any> = {
    app: reducer
}