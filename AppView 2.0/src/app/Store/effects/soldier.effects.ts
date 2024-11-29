import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { of } from "rxjs";
import { ApiService } from "../../Services/api";
import { IApiRes } from "../../Models/api";
import { HttpErrorResponse } from "@angular/common/http";
import { getSoldiersFailure, getSoldiersSuccess, selectSoldierById, postSoldierFailure, postSoldierSuccess, SOLDIER_ACTIONS, selectSoldierByIdSuccess } from "../actions/soldier.action";
import { ISoldier } from "../interfaces/soldiers";
import { selectSoldierList } from "../selectors/soldier.selector";
import { Router } from "@angular/router";
import { getRemissionsFailure, getRemissionsSuccess, postRemissionFailure, postRemissionSuccess, REMISSION_ACTIONS } from "../actions/remission.action";
import { IRemission } from "../interfaces/remission";
import { setDialogType } from "../actions/config.action";
import { MessageService } from "primeng/api";

@Injectable()
export class SoldierEffects {

  getSoldiers$ = createEffect(() => this._actions$.pipe(
    ofType(SOLDIER_ACTIONS.GetSoldiers),
    switchMap(() => this._apiService.getSoldiers().pipe(
      map((data: IApiRes<ISoldier[]>) => {
        return getSoldiersSuccess({ data: data.data || [] });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getSoldiersFailure({ error: error.error }));
      })
    ))
  ));

  postSoldier$ = createEffect(() => this._actions$.pipe(
    ofType(SOLDIER_ACTIONS.PostSoldier),
    switchMap((data: any) => {
      return this._apiService.postSoldier(data.data).pipe(
        map((data: IApiRes<ISoldier>) => {
          this.router.navigate(['/soldiers/table']);
          return postSoldierSuccess({ item: data.data });
        }),
        catchError((error: HttpErrorResponse) => {
          return of(postSoldierFailure({ error: error.error }));
        }))
    })
  ));

  getRemissions$ = createEffect(() => this._actions$.pipe(
    ofType(REMISSION_ACTIONS.GetRemissions),
    switchMap(() => this._apiService.getRemisions().pipe(
      map((data: IApiRes<IRemission[]>) => {
        return getRemissionsSuccess({ data: data.data });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getRemissionsFailure({ error: error.error }));
      })
    ))
  ));

  postRemission$ = createEffect(() => this._actions$.pipe(
    ofType(REMISSION_ACTIONS.PostRemission),
    switchMap((data: any) => {
      return this._apiService.postRemision(data.data).pipe(
        map((data: IApiRes<IRemission>) => {
          this._store.dispatch(setDialogType({ dialogType: null }));
          this.messageService.add({ severity: 'success', detail: 'Звільнення видано' })
          return postRemissionSuccess({ item: data.data });
        }),
        catchError((error: HttpErrorResponse) => {
          return of(postRemissionFailure({ error: error.error }));
        }))
    })
  ));

  getSoldier$ = createEffect(() => this._actions$.pipe(
    ofType(SOLDIER_ACTIONS.SelectSoldierById),
    map((action: any) => action.id),
    withLatestFrom(this._store.pipe(select(selectSoldierList))),
    switchMap(([id, soldiers]) => {
      const selectedSoldier = soldiers && soldiers.length ? soldiers.find(it => it._id === id) : null;
      return of(selectSoldierByIdSuccess({ soldier: selectedSoldier || null }));
    })
  ));

  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private router: Router,
    private messageService: MessageService
  ) { }
}