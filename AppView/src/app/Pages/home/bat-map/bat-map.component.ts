import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api';
import { ApiListComponent } from '../../../Services/list-api';
import { IBatStructure } from '../../../Models/structure';
import { IApiRes } from '../../../Models/api';

@Component({
  selector: 'app-bat-map',
  templateUrl: './bat-map.component.html',
  styleUrl: './bat-map.component.scss'
})
export class BatMapComponent extends ApiListComponent<IBatStructure> {
  constructor(private apiService: ApiService) {
    super();
  }


  doGetData() {
    return this.apiService.getStructure();
  }

  override onDataReceived(res: IApiRes<IBatStructure>) {
    console.log(res);
    super.onDataReceived(res.data);
  }

}
