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
import { EQUIPMENT_ACTIONS, getEquipmentsFailure, getEquipmentsSuccess, postEquipmentFailure, postEquipmentSuccess } from '../actions/equipment.action';
import { IEquipment } from '../interfaces/equipments';

@Injectable()
export class EquipmentEffects {
  getEquipments$ = createEffect(() => this._actions$.pipe(
    ofType(EQUIPMENT_ACTIONS.GetEquipments),
    switchMap(() => this._apiService.getEquipments().pipe(
      map((data: IApiRes<IEquipment[]>) => {
        return getEquipmentsSuccess({ data: data.data });
      }),
      catchError((error: HttpErrorResponse) => {
        return of(getEquipmentsFailure({ error: error.error }));
      })
    ))
  ));

  postEquipment$ = createEffect(() =>
    this._actions$.pipe(
      ofType(EQUIPMENT_ACTIONS.PostEquipment),
      switchMap((data: any) => {
        return this._apiService.postEquipment(data.data).pipe(
          map((data: IApiRes<IEquipment>) => {
            // this._store.dispatch(setDialogType({ dialogType: null }));
            this.messageService.add({
              severity: 'success',
              detail: 'Звільнення видано',
            });
            return postEquipmentSuccess({ item: data.data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(postEquipmentFailure({ error: error.error }));
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
