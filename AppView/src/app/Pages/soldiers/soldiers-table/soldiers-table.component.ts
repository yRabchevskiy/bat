import { Component } from '@angular/core';
import { ISoldier } from '../../../Models/soldiers';
import { SEX_TYPE } from '../../../Models/general';
import { ApiListComponent } from '../../../Services/list-api';
import { ApiService } from '../../../Services/api';

@Component({
  selector: 'app-soldiers-table',
  templateUrl: './soldiers-table.component.html',
  styleUrl: './soldiers-table.component.scss',
})
export class SoldiersTableComponent extends ApiListComponent<ISoldier> {
  editableSoldier: ISoldier | undefined = undefined;
  showForm: string | null = null;
  readonly set_types = SEX_TYPE;
  constructor(private apiService: ApiService) {
    super();
  }

  doGetData() {
    return this.apiService.getSoldiers();
  }

  override onDataReceived(res: ISoldier[]) {
    super.onDataReceived(res);
  }

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
  }
}
