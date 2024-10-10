import { Component } from '@angular/core';
import { ITab } from '../../Models/Tabs/tabs';
import { SoldiersTabs } from './soldiers_tabs';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent  {
  
  readonly tabs: ITab[] = SoldiersTabs;
  selectedTab: string = this.tabs[0].id;
  
  constructor() {}

  onSelectTab($event: string) {
    this.selectedTab = $event;
  }

}
