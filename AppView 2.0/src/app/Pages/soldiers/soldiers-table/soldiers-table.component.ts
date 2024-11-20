import { Component } from '@angular/core';
import { ISoldier } from '../../../Store/interfaces/soldiers';
import { selectSoldierList, selectSoldierStateLoading } from '../../../Store/selectors/soldier.selector';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-soldiers-table',
  templateUrl: './soldiers-table.component.html',
  styleUrl: './soldiers-table.component.scss',
})
export class SoldiersTableComponent {
  soldiers: ISoldier[] = [];
  loading: boolean = false;
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectSoldierList).subscribe(_soldiers => {
      this.soldiers = _soldiers;
    });
    this._store.select(selectSoldierStateLoading).subscribe(_it => {
      this.loading = _it;
    })
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
  }

  globalFilter(dataTable: Table, e: Event) {
    dataTable.filterGlobal((e.target as HTMLInputElement).value, 'contains')
  }
}
