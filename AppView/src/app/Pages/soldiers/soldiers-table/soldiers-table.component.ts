import { Component } from '@angular/core';
import { ISoldier } from '../../../Models/soldiers';
import { SoldiersService } from '../../../Services/soldiers.service';
import { SEX_TYPE } from '../../../Models/general';

@Component({
  selector: 'app-soldiers-table',
  templateUrl: './soldiers-table.component.html',
  styleUrl: './soldiers-table.component.scss',
})
export class SoldiersTableComponent {
  data: ISoldier[] = [];
  showCreateForm: boolean = false;
  readonly set_types = SEX_TYPE;
  constructor(private _SoldiersService: SoldiersService) {
    this._SoldiersService.soldiersData.subscribe(
      (_data: ISoldier[]) => (this.data = _data)
    );
  }

  ngOnInit() {}

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
    this._SoldiersService.deleteSoldier($event._id);
  }

  showCreateSoldiersForm() {
    this.showCreateForm = true;
  }

  closeCreateSoldiersForm() {
    this.showCreateForm = false;
  }
}
