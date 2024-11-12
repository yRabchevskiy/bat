import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { of } from "rxjs";
import { ApiService } from "../../Services/api";
import { CONFIG_ACTIONS, loginFailure, loginSuccess } from "../actions/config.action";
import { HttpErrorResponse } from "@angular/common/http";
import { IUser } from "../interfaces/user";
import { IApiRes } from "../../Models/api";

@Injectable()
export class ConfigEffects {

  login$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CONFIG_ACTIONS.Login),
      switchMap(({ nickname, password }) =>
        this._apiService.login({ nickname, password }).pipe(
          map((data: IApiRes<IUser>) => {
            return loginSuccess({ data: data.data});
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loginFailure({ data: error.error }));
          })
        )
      )
    )
  });

  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}