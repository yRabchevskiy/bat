import { Component, OnInit } from '@angular/core';
import { ITab } from '../../Models/Tabs/tabs';
import { SoldiersTabs } from './soldiers_tabs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../Store/state/app.state';
import { getSoldiers } from '../../Store/actions/soldier.action';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent implements OnInit {
  
  // readonly tabs: ITab[] = SoldiersTabs;
  // selectedTab: string = this.tabs[0].id;

   
  constructor(private _store: Store<IAppState>) {
    
  }

  ngOnInit(): void {
    this._store.dispatch(getSoldiers());
  }

  // onSelectTab($event: string) {
    // this.selectedTab = $event;
    // this._store.dispatch(getUser({ id: this.users[0]._id }))
  // }
}
