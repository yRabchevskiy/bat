import { Component, OnInit } from '@angular/core';
import { ITab } from '../../Models/Tabs/tabs';
import { SoldiersTabs } from './soldiers_tabs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../Store/state/app.state';
import { GetUsers } from '../../Store/actions/user.action';
import { selectUserList } from '../../Store/selectors/user.selector';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent implements OnInit {
  
  readonly tabs: ITab[] = SoldiersTabs;
  selectedTab: string = this.tabs[0].id;

  users$ = this._store.pipe(select(selectUserList));
  
  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new GetUsers())
  }

  onSelectTab($event: string) {
    this.selectedTab = $event;
  }

}
