import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { IRemission } from '../../../Store/interfaces/remission';
import { getRemissions } from '../../../Store/actions/remission.action';
import { Table } from 'primeng/table';
import {
  selectRemissionList,
  selectRemissionStateLoading,
} from '../../../Store/selectors/remission.selector';
import { format, isBefore, subDays } from 'date-fns';
import { scales } from 'chart.js';

@Component({
  selector: 'app-remission-table',
  templateUrl: './remission-table.component.html',
  styleUrl: './remission-table.component.scss',
  standalone: false,
})
export class RemissionTableComponent implements OnInit {
  data: IRemission[] = [];
  chartData: any = {};
  options: any = {};
  today: Date = new Date();

  columns: any[] = [
    { field: 'start_date', template: 'date', format: 'dd/MM/yyyy', header: 'З:', width: '120px', hidden: false },
    { field: 'end_date', template: 'date', format: 'dd/MM/yyyy', header: 'До:', width:    '120px', hidden: false },
    { field: 'diffOfDays', format: '', header: 'К-сть', width: '120px', hidden: false },
    { field: 'name', format: '', header: 'ПІБ', width: '240px', hidden: false },
    { field: 'rank', format: '', header: 'Звання', width: '120px', hidden: false },
    { field: 'union', format: '', header: 'Підрозділ', width: '120px', hidden: false },
    { field: 'diagnosis', format: '', header: 'Діагноз', hidden: false },
    { field: 'description', format: '', header: 'Опис', hidden: true },
  ];

  filterFields: string[] = ['name', 'union', 'start_date', 'end_date', 'diagnosis'];

  private _rangeDates: Date[] | undefined = undefined;

  get rangeDates(): Date[] | undefined {
    return this._rangeDates;
  }
  set rangeDates(value: Date[] | undefined) {
    if (value !== this._rangeDates) {
      this._rangeDates = value;
      if (value && value.length === 2 && !value.some((date) => date == null)) {
        this.onCreateRemission();
      }
    }
  }
  showRemissionForm: boolean = false;
  loading = this._store.select(selectRemissionStateLoading);

  constructor(private _store: Store<IAppState>) {
    this._store.select(selectRemissionList).subscribe((_data) => {
      this.data = _data;
    });
  }

  ngOnInit(): void {
    if (!this.data || !this.data.length) {
      this.onLoadData();
    }
  }

  onCreateRemission() {
    this.showRemissionForm = true;
  }

  onCloseCreateRemission() {
    this.showRemissionForm = false;
    this.rangeDates = undefined;
  }

  onLoadData() {
    this._store.dispatch(getRemissions());
  }

  globalFilter(dataTable: Table, e: Event) {
    dataTable.filterGlobal((e.target as HTMLInputElement).value, 'contains');
  }

  getBorderStyle(item: IRemission): string {
    if (item.expDays == undefined) return 'table-tr-b-grey';
    if (item.expDays == 0) return 'table-tr-b-red';
    if (item.expDays < 0 && item.expDays >= -3) {
      return 'table-tr-b-yellow';
    }
    if (item.expDays < -3) return 'table-tr-b-green';
    return 'table-tr-b-grey';
  }
}
