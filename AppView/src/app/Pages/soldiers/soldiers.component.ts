import { Component, OnInit } from '@angular/core';
import { ISoldier } from '../../Models/soldiers';
import { SoldiersService } from '../../Services/soldiers.service';
import { ITab } from '../../Models/Tabs/tabs';
import { SoldiersTabs } from './soldiers_tabs';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrl: './soldiers.component.scss',
})
export class SoldiersComponent implements OnInit {
  soldiers: ISoldier[] = [];
  readonly tabs: ITab[] = SoldiersTabs;
  selectedTab: string = this.tabs[0].id;
  constructor(private _SoldiersService: SoldiersService) {
    this._SoldiersService.soldiersData.subscribe(
      (data) => (this.soldiers = data)
    );
  }

  ngOnInit() {
    this.getData();
  }

  onSelectTab($event: string) {
    this.selectedTab = $event;
  }

  private getData(): void {
    this._SoldiersService.getSoldiers();
  }

}
