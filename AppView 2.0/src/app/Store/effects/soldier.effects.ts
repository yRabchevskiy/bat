import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { of } from "rxjs";
import { ApiService } from "../../Services/api";
import { IApiRes } from "../../Models/api";
import { HttpErrorResponse } from "@angular/common/http";
import { getSoldiersFailure, getSoldiersSuccess, postSoldierFailure, postSoldierSuccess, SOLDIER_ACTIONS, selectSoldierByIdSuccess, deleteSoldierSuccess, deleteSoldierFailure, } from "../actions/soldier.action";
import { ISoldier } from "../interfaces/soldiers";
import { selectSoldierList } from "../selectors/soldier.selector";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { getHospitalizationsFailure, getHospitalizationsSuccess, HOSPITALIZATION_ACTIONS } from "../actions/hospitalization.action";
import { IHospitalization } from "../interfaces/hospitalization";

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

  deleteSoldier$ = createEffect(() => this._actions$.pipe(
    ofType(SOLDIER_ACTIONS.deleteSoldier),
    switchMap((data: any) => {
      return this._apiService.deleteSoldier(data.id).pipe(
        map((data: IApiRes<string>) => {
          this.router.navigate(['/soldiers/table']);
          return deleteSoldierSuccess({ id: data.data });
        }),
        catchError((error: HttpErrorResponse) => {
          return of(deleteSoldierFailure({ error: error.error }));
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

  getHospitalizations$ = createEffect(() => this._actions$.pipe(
    ofType(HOSPITALIZATION_ACTIONS.GetHospitalizations),
    switchMap(() => this._apiService.getHospitalizations().pipe(
      map((data: IApiRes<IHospitalization[]>) => {
        return getHospitalizationsSuccess({ data: data.data });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getHospitalizationsFailure({ error: error.error }));
      })
    ))
  ));

  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private router: Router,
    private messageService: MessageService
  ) { }
}