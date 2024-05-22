import { Component } from '@angular/core';
import { ISoldier } from '../../../Models/soldiers';
import { SoldiersService } from '../../../Services/soldiers.service';

@Component({
  selector: 'app-soldiers-table',
  templateUrl: './soldiers-table.component.html',
  styleUrl: './soldiers-table.component.scss',
})
export class SoldiersTableComponent {
  soldiers: ISoldier[] = [];
  constructor(private _SoldiersService: SoldiersService) {
    this._SoldiersService.soldiersData.subscribe(
      (data) => (this.soldiers = data)
    );
  }

  ngOnInit() {
    this.getData();
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
    this._SoldiersService.deleteSoldier($event._id);
  }

  private getData(): void {
    this._SoldiersService.getSoldiers();
  }
}
