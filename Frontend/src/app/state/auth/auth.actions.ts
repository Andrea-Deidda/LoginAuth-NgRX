import { createAction, props } from '@ngrx/store';



export const loginRequest = createAction(
    '[Auth] Login Request',
    props<{ credential : any}>()
  );

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ loginSuccessResponse: any }>()
  );

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: any}>()
  );
