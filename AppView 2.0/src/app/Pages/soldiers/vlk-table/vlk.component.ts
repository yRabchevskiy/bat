import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { getVlks } from '../../../Store/actions/vlk.action';
import { Table } from 'primeng/table';
import { IVlk } from '../../../Store/interfaces/vlk';
import {
  selectVlkList,
  selectVlkStateLoading,
} from '../../../Store/selectors/vlk.selectors';
import { IDoubleClick } from '../../../Store/interfaces/general';

@Component({
  selector: 'app-vlk',
  templateUrl: './vlk.component.html',
  styleUrl: './vlk.component.scss',
  standalone: false,
})
export class VlkComponent {
  data: IVlk[] = [];
  selectedVlk: IVlk | undefined = undefined;
  visibleVlkForm: boolean = false;
  filterFields: string[] = [
    'name',
    'vlk_result',
    'vlk_institution',
    'vlk_date',
    'rank',
  ];
  expandedRows = {};
  clickInfo: IDoubleClick = {};

  loading = this._store.select(selectVlkStateLoading);
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectVlkList).subscribe((_data) => {
      this.data = _data;
    });
  }

  ngOnInit(): void {
    if (!this.data || !this.data.length) {
      this.onLoadData();
    }
  }

  onEditItem(event: IVlk) {
    this.selectedVlk = event;
    this.onVisibleVlkForm(true);
  }

  globalFilter(dataTable: Table, e: Event) {
    dataTable.filterGlobal((e.target as HTMLInputElement).value, 'contains');
  }

  onLoadData() {
    this._store.dispatch(getVlks());
  }

  onVisibleVlkForm(e: boolean) {
    this.visibleVlkForm = e;
  }
}
