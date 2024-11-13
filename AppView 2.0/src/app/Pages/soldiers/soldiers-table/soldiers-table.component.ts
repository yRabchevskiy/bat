import { Component } from '@angular/core';
import { ISoldier } from '../../../Store/interfaces/soldiers';
import { selectSoldierList } from '../../../Store/selectors/soldier.selector';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';

@Component({
  selector: 'app-soldiers-table',
  templateUrl: './soldiers-table.component.html',
  styleUrl: './soldiers-table.component.scss',
})
export class SoldiersTableComponent {
  soldiers: ISoldier[] = [];
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectSoldierList).subscribe(_soldiers => {
      this.soldiers = _soldiers;
    })
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
  }
}
