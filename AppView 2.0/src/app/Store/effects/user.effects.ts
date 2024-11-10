import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetUser, GetUsers, GetUsersSuccess, GetUserSuccess, USER_ACTIONS } from "../actions/user.action";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { selectUserList } from "../selectors/user.selector";
import { of } from "rxjs";
import { ApiService } from "../../Services/api";

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() => this._actions$.pipe(
    ofType<GetUser>(USER_ACTIONS.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users && users.length ? users[0] : null;
      return of(new GetUserSuccess(selectedUser));
    })
  ));

  getUsers$ = createEffect(() => this._actions$.pipe(
    ofType<GetUsers>(USER_ACTIONS.GetUsers),
    switchMap(() => this._apiService.getUsers()),
    switchMap((_: any) => {
      console.log(_);
      debugger
      return of(new GetUsersSuccess(_));
    })
  ))

  constructor(
    private _apiService: ApiService, 
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}