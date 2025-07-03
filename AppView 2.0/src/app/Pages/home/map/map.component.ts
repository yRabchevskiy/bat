import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api';
import { Router } from '@angular/router';
import { GraphService } from '../../../Services/graph/graph.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss',
    standalone: false
})
export class MapComponent {
  // data: IBatStructure[] = [];
  selectedBatId: string = '';
  loading: boolean = false;
  constructor(private apiService: ApiService, private router: Router, private graphService: GraphService<any>,) {
  }


  // doGetData() {
  //   return this.apiService.getStructure();
  // }

  // override onDataReceived(res: IApiRes<IBatStructure>) {
  //   super.onDataReceived(res.data);
  // }

  blockSoldiers(id?: string) {
    if (!id) return;
  }

  displayStructureItemDialog(value?: string) {
    this.selectedBatId = value ? value : '';
    // const strItem = new StructureItem();
    // this.apiService.addStructureItem();
  }

  onZoomIn() {
    this.graphService.zoomIn();
  }
  onZoomOut() {
    this.graphService.zoomOut();
  }

  // onAddStructureItem(value: IUnit) {
  //   this.loading = true;
  //   this.apiService.addStructureItem({ ...value, structure_id: this.selectedBatId }).subscribe({
  //     next: value => {
  //       this.loading = false;
  //       this.selectedBatId = '';
  //       console.log('Observable emitted the next value: ' + value);
  //       // this.updateData(this.selectedBatId, value.data);
  //     },
  //     error: err => {
  //       this.loading = false;
  //       console.error('Observable emitted an error: ' + err)
  //     }
  //   });
  // }

}
