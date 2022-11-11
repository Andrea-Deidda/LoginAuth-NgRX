import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/service/login/login.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from "rxjs";
import * as AuthActions from './auth.actions'


@Injectable()
export class AuthEffects{

    loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) =>
        this.loginService
          .login(action.credential)
          .pipe(
            map((loginSuccessResponse) =>
              AuthActions.loginSuccess({ loginSuccessResponse })
            ),
            catchError((error) => of(AuthActions.loginFailure({ error })))
          )
      )
    )
  );


    loginSuccess$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ loginSuccessResponse }) => {
                this.router.navigateByUrl('/dashboard');
                alert(
                    'Login Succesful! ' + 
                    'Welcome, ' +
                    loginSuccessResponse.data.user.name 
                );
            })
        ),
        {dispatch: false} //altrimenti rimane bloccato perché si aspetta un altra azione
    );


    loginFailure$ = createEffect(
      () =>
      this.actions$.pipe(
          ofType(AuthActions.loginFailure),
          tap(({ error }) => {
              alert(
                  'Login failed! ' + 
                  error.error 
              );
          })
      ),
      {dispatch: false} //altrimenti rimane bloccato perché si aspetta un altra azione
  );


    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router : Router
    ){}

}