import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { selectUserList } from "../selectors/user.selector";
import { of } from "rxjs";
import { ApiService } from "../../Services/api";
import { getUsersFailure, getUsersSuccess, getUserSuccess, USER_ACTIONS } from "../actions/user.action";
import { IApiRes } from "../../Models/api";
import { IUser } from "../interfaces/user";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() => this._actions$.pipe(
    ofType(USER_ACTIONS.GetUsers),
    switchMap(() => this._apiService.getUsers().pipe(
      map((data: IApiRes<IUser[]>) => {
        return getUsersSuccess({ users: data.data });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getUsersFailure({ error: error.error }));
      })
    ))
  ))

  getUser$ = createEffect(() => this._actions$.pipe(
    ofType(USER_ACTIONS.GetUser),
    map((action: any) => action.id),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users && users.length ? users.find(it => it._id === id) : null;
      return of(getUserSuccess({ user: selectedUser || null}));
    })
  ));

  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}