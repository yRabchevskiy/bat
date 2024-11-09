import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api';
import { ApiListComponent } from '../../../Services/list-api';
import { IApiRes } from '../../../Models/api';
import { Router } from '@angular/router';
import { IBatStructure, IStructure } from '../../../Models/Structure/structure';

@Component({
  selector: 'app-bat-map',
  templateUrl: './bat-map.component.html',
  styleUrl: './bat-map.component.scss'
})
export class BatMapComponent extends ApiListComponent<IBatStructure> {
  selectedBatId: string = '';
  loading: boolean = false;
  constructor(private apiService: ApiService, private router: Router) {
    super();
  }


  doGetData() {
    return this.apiService.getStructure();
  }

  override onDataReceived(res: IApiRes<IBatStructure>) {
    console.log(res);
    super.onDataReceived(res.data);
  }

  blockSoldiers(id?: string) {
    if (!id) return;
  }

  displayStructureItemDialog(value?: string) {
    this.selectedBatId = value ? value : '';
    // const strItem = new StructureItem();
    // this.apiService.addStructureItem();
  }

  onAddStructureItem(value: IStructure) {
    this.loading = true;
    this.apiService.addStructureItem({ ...value, structure_id: this.selectedBatId }).subscribe({
      next: value => {
        this.loading = false;
        this.selectedBatId = '';
        console.log('Observable emitted the next value: ' + value);
        this.updateData(this.selectedBatId, value.data);
      },
      error: err => {
        this.loading = false;
        console.error('Observable emitted an error: ' + err)
      }
    });
  }

}
