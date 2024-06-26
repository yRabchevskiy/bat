import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../../../Services/visit.service';
import { IVisit } from '../../../Models/soldiers';
import { TYPE_OF_VISIT } from '../../../Models/general';

@Component({
  selector: 'app-hospitalisation',
  templateUrl: './hospitalisation.component.html',
  styleUrl: './hospitalisation.component.scss'
})
export class HospitalisationComponent implements OnInit {
  data: IVisit[] = [];

  constructor(private _dataService: VisitsService) {
    this._dataService.visitsData.subscribe(
      (_data: IVisit[]) => {
        this.data = _data
      }
    );
  }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this._dataService.getVisits();
  }
}
