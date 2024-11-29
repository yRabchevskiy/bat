import { Component, OnInit } from '@angular/core';
import { ITab } from '../../Models/Tabs/tabs';
import { SoldiersTabs } from './soldiers_tabs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../Store/state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent implements OnInit {
  
  readonly tabs: ITab[] = SoldiersTabs;
  selectedTab: string = '';

   
  constructor(private _store: Store<IAppState>, private route: Router) {
    
  }

  ngOnInit(): void {
    this.setInitialSelectedTab();
  }

  setInitialSelectedTab() {
    const _tab = SoldiersTabs.find(it => this.route.url.includes(it.url as string));
    this.selectedTab = _tab ? _tab.id : this.tabs[0].id;
  }


  onSelectTab($event: ITab) {
    this.selectedTab = $event.id;
    this.route.navigate([$event.url]);
  }
}
