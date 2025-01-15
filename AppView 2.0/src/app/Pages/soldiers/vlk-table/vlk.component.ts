import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { getVlks } from '../../../Store/actions/vlk.action';
import { selectVlkList } from '../../../Store/selectors/soldier.selector';

@Component({
    selector: 'app-vlk',
    templateUrl: './vlk.component.html',
    styleUrl: './vlk.component.scss',
    standalone: false
})
export class VlkComponent {
  vlks: any[] = [];
  constructor(private _store: Store<IAppState>) {
    this._store.select(selectVlkList).subscribe(_data => {
      this.vlks = _data;
    });
  }

  ngOnInit(): void {
    if (!this.vlks || !this.vlks.length) {
      this._store.dispatch(getVlks());
    }    
  }
}
