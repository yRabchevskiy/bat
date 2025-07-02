import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of } from 'rxjs';
import { ApiService } from '../../Services/api';
import { IApiRes } from '../../Models/api';
import { HttpErrorResponse } from '@angular/common/http';

import { IRemission } from '../interfaces/remission';
import { MessageService } from 'primeng/api';
import { getDiffOfDays } from '../../Helpers/soldier.helper';
import { differenceInCalendarDays } from 'date-fns';
import { getPlanningsFailure, getPlanningsSuccess, PLANNING_ACTIONS, postPlanningFailure, postPlanningSuccess } from '../actions/planning.action';
import { IPlanning } from '../interfaces/planning';

@Injectable()
export class PlanningEffects {
  getPlannings$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PLANNING_ACTIONS.GetPlannings),
      switchMap(() =>
        this._apiService.getPlannings().pipe(
          map(
            (data: IApiRes<IPlanning[]>) => {
              return getPlanningsSuccess({
                data: data.data
              });
            },
            catchError((error: HttpErrorResponse) => {
              return of(getPlanningsFailure({ error: error.error }));
            })
          )
        )
      )
    )
  );

  postPlanning$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PLANNING_ACTIONS.PostPlanning),
      switchMap((data: any) => {
        return this._apiService.postPlanning(data.data).pipe(
          map((data: IApiRes<IPlanning>) => {
            // this._store.dispatch(setDialogType({ dialogType: null }));
            this.messageService.add({
              severity: 'success',
              detail: 'Заплановано',
            });
            return postPlanningSuccess({ item: data.data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(postPlanningFailure({ error: error.error }));
          })
        );
      })
    )
  );


  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private messageService: MessageService
  ) {}
}
