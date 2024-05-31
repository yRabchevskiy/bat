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
  editableSoldier: ISoldier | null = null;
  showCreateForm: boolean = false;
  showVisitForm: boolean = false;
  readonly set_types = SEX_TYPE;
  constructor(private _SoldiersService: SoldiersService) {
    this._SoldiersService.soldiersData.subscribe(
      (_data: ISoldier[]) => (this.data = _data)
    );
  }

  ngOnInit() {}

  addVisit($event: ISoldier) {
    this.editableSoldier = $event;
    this.openVisitForm();
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
    this._SoldiersService.deleteSoldier($event._id);
  }

  openVisitForm() {
    this.showVisitForm = true;
  }

  closeVisitForm() {
    this.showVisitForm = false;
  }

  openCreateSoldierForm() {
    this.showCreateForm = true;
  }

  closeCreateSoldierForm() {
    this.showCreateForm = false;
  }
}
