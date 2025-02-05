import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { IRemission } from '../../../Store/interfaces/remission';
import { selectRemissionList, selectSoldierStateLoading } from '../../../Store/selectors/soldier.selector';
import { getRemissions } from '../../../Store/actions/remission.action';
import { Table } from 'primeng/table';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'app-remission-table',
    templateUrl: './remission-table.component.html',
    styleUrl: './remission-table.component.scss',
    standalone: false
})
export class RemissionTableComponent implements OnInit {
  @ViewChild('drawerRef') drawerRef!: Drawer;
  data: IRemission[] = [];
  showRemissionForm: boolean = false;
  loading = this._store.select(selectSoldierStateLoading);
  
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectRemissionList).subscribe(_data => {
      this.data = _data;
    });
  }

  ngOnInit(): void {
    if (!this.data || !this.data.length) {
      this._store.dispatch(getRemissions());
    }
  }

  onCreateRemission() {
    this.showRemissionForm = true;
  }

  onCloseCreateRemission(e: any) {
    this.drawerRef.close(e);
  }

  onLoadData() {
    this._store.dispatch(getRemissions());
  }
  

  globalFilter(dataTable: Table, e: Event) {
    dataTable.filterGlobal((e.target as HTMLInputElement).value, 'contains')
  }
}
