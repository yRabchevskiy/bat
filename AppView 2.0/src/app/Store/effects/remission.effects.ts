import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of } from 'rxjs';
import { ApiService } from '../../Services/api';
import { IApiRes } from '../../Models/api';
import { HttpErrorResponse } from '@angular/common/http';
import {
  getRemissionsFailure,
  getRemissionsSuccess,
  postRemissionFailure,
  postRemissionSuccess,
  REMISSION_ACTIONS,
} from '../actions/remission.action';
import { IRemission } from '../interfaces/remission';
import { MessageService } from 'primeng/api';
import { getDiffOfDays } from '../../Helpers/soldier.helper';
import { differenceInCalendarDays, differenceInDays } from 'date-fns';

@Injectable()
export class RemissionEffects {
  getRemissions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(REMISSION_ACTIONS.GetRemissions),
      switchMap(() =>
        this._apiService.getRemisions().pipe(
          map(
            (data: IApiRes<IRemission[]>) => {
              return getRemissionsSuccess({
                data: data.data
                  .map((item) => this.prepareRemissionItem(item))
                  .sort((a, b) => a.expDays && b.expDays && b.expDays >= a.expDays ? 1 : -1)
                  .reverse(),
              });
            },
            catchError((error: HttpErrorResponse) => {
              return of(getRemissionsFailure({ error: error.error }));
            })
          )
        )
      )
    )
  );

  postRemission$ = createEffect(() =>
    this._actions$.pipe(
      ofType(REMISSION_ACTIONS.PostRemission),
      switchMap((data: any) => {
        return this._apiService.postRemision(data.data).pipe(
          map((data: IApiRes<IRemission>) => {
            // this._store.dispatch(setDialogType({ dialogType: null }));
            this.messageService.add({
              severity: 'success',
              detail: 'Звільнення видано',
            });
            return postRemissionSuccess({ item: this.prepareRemissionItem(data.data) });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(postRemissionFailure({ error: error.error }));
          })
        );
      })
    )
  );

  private prepareRemissionItem(item: IRemission): IRemission {
    item.diffOfDays = getDiffOfDays(item.start_date, item.end_date);
    const today = new Date();
    item.expDays = differenceInCalendarDays(today, item.end_date);
    return item;
  }

  constructor(
    private _apiService: ApiService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private messageService: MessageService
  ) {}
}
