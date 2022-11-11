
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loginSuccess, loginFailure } from './auth.actions';

export interface State {
    token: string,
    user: any,
    loginError?: string
}


export const initialState: State = {
    token: '',
    user: null
}

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, { loginSuccessResponse }) => {
        console.log(loginSuccessResponse)
        return {
            ...state,
            token: loginSuccessResponse.data.token,
            user: loginSuccessResponse.data.user
        };
    }),
    on(loginFailure, (state, { error }) => {
        console.log(error.error)
        return {
            ...state,
            loginError: error.data,
            token: '',
            user: null
        };
    }),
)

export function authReducer(state: State | undefined, action: Action) {
    return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectToken = createSelector(
    selectAuthState, 
    (state) => state.token);

export const selectUser = createSelector(
    selectAuthState, 
    (state) => state.user);