import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITab } from '../../../Models/Tabs/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrl: './app-tabs.component.scss',
})
export class AppTabsComponent {
  @Input() tabs: ITab[] = [];
  @Output() onSelectTab: EventEmitter<string> = new EventEmitter<string>();

  _selectedTab: string = '';

  @Input() set selectedTab(value: string) {
    this._selectedTab = value;
  }
  get selectedTab(): string {
    return this._selectedTab;
  }
  selectTab($event: ITab) {
    this.onSelectTab.emit($event.id);
  }
}
