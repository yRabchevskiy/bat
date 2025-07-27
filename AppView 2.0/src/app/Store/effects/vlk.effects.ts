import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { of } from 'rxjs';
import { ApiService } from '../../Services/api';
import { IApiRes } from '../../Models/api';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { getVlksFailure, getVlksSuccess, postVlkFailure, postVlkSuccess, VLK_ACTIONS } from '../actions/vlk.action';
import { IVlk } from '../interfaces/vlk';

@Injectable()
export class VlkEffects {
  getVlks$ = createEffect(() => this._actions$.pipe(
    ofType(VLK_ACTIONS.GetVlks),
    switchMap(() => this._apiService.getVlks().pipe(
      map((data: IApiRes<any[]>) => {
        return getVlksSuccess({ data: data.data.reverse() });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getVlksFailure({ error: error.error }));
      })
    ))
  ));

  postVlk$ = createEffect(() =>
    this._actions$.pipe(
      ofType(VLK_ACTIONS.PostVlk),
      switchMap((data: any) => {
        return this._apiService.postVlk(data.data).pipe(
          map((data: IApiRes<IVlk>) => {
            // this._store.dispatch(setDialogType({ dialogType: null }));
            this.messageService.add({
              severity: 'success',
              detail: 'Звільнення видано',
            });
            return postVlkSuccess({ item: data.data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(postVlkFailure({ error: error.error }));
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
