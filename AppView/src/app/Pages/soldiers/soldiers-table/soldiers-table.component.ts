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
  editableSoldier: ISoldier | undefined = undefined;
  showForm: string | null = null;
  readonly set_types = SEX_TYPE;
  constructor(private _SoldiersService: SoldiersService) {
    this._SoldiersService.soldiersData.subscribe(
      (_data: ISoldier[]) => (this.data = _data)
    );
  }

  ngOnInit() {}

  openModalWindow(type: string, $event?: ISoldier) {
    if (type === 'visit' || type === 'vlk') {
      this.editableSoldier = $event;
    }
    this.showForm = type;
  }

  closeModalWindow() {
    this.editableSoldier = undefined;
    this.showForm = null;
  }

  deleteSoldier($event: ISoldier) {
    if (!$event._id) return;
    this._SoldiersService.deleteSoldier($event._id);
  }
}
