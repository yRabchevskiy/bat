import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { IEquipment } from '../../../Store/interfaces/equipments';
import { getEquipments } from '../../../Store/actions/equipment.action';
import { selectEquipmentList, selectEquipmentStateLoading } from '../../../Store/selectors/equipment.selectors';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.scss',
  standalone: false,
})
export class EquipmentsComponent {
  data: IEquipment[] = [];
  loading = this._store.select(selectEquipmentStateLoading);
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectEquipmentList).subscribe((_data) => {
      this.data = _data;
    });
  }

  ngOnInit(): void {
    if (!this.data || !this.data.length) {
      this.onLoadData();
    }
  }

  onLoadData() {
    this._store.dispatch(getEquipments());
  }
}
