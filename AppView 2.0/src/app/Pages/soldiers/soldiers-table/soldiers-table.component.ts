import { Component } from '@angular/core';
import { ISoldier } from '../../../Store/interfaces/soldiers';
import { selectSoldierList, selectSoldierStateLoading } from '../../../Store/selectors/soldier.selector';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { Table } from 'primeng/table';
import { SoldierDialogType } from '../../../Store/interfaces/general';
import { setDialogType } from '../../../Store/actions/config.action';
import { selectDialogType } from '../../../Store/selectors/config.selector';
import { getSoldiers } from '../../../Store/actions/soldier.action';


@Component({
    selector: 'app-soldiers-table',
    templateUrl: './soldiers-table.component.html',
    styleUrl: './soldiers-table.component.scss',
    standalone: false,
})
export class SoldiersTableComponent {
  soldiers: ISoldier[] = [];
  loading = this._store.select(selectSoldierStateLoading);
  selectedSoldier: ISoldier | null = null;
  expandedRows = {}
  dialogType: SoldierDialogType | null = null;
  dialogTypes = SoldierDialogType;
  
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectSoldierList).subscribe(_soldiers => {
      this.soldiers = _soldiers;
    });
    this._store.select(selectDialogType).subscribe(it => {
      this.dialogType = it;
      if (!it) {
        this.selectedSoldier = null;
      }
    });
  }

  ngOnInit(): void {
    if (!this.soldiers || !this.soldiers.length) {
      this._store.dispatch(getSoldiers());
    }    
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
  }

  openRemission($event: ISoldier, type: SoldierDialogType) {
    this.selectedSoldier = $event;
    this._store.dispatch(setDialogType({ dialogType: type }));
  }

  closeDialog($event: boolean) {
    this.selectedSoldier = null;
    this._store.dispatch(setDialogType({ dialogType: null }));
  }

  globalFilter(dataTable: Table, e: Event) {
    dataTable.filterGlobal((e.target as HTMLInputElement).value, 'contains')
  }

  onLoadData() {
    this._store.dispatch(getSoldiers());
  }
}
