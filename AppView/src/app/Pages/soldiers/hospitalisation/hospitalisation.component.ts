import { Component, OnInit } from '@angular/core';
import { HospitalizationsService } from '../../../Services/hospitalization.service';

@Component({
  selector: 'app-hospitalisation',
  templateUrl: './hospitalisation.component.html',
  styleUrl: './hospitalisation.component.scss'
})
export class HospitalisationComponent implements OnInit {
  data: any[] = [];

  constructor(private _dataService: HospitalizationsService) {
    this._dataService.hospitalizationsData.subscribe(
      (_data: any[]) => {
        this.data = _data
      }
    );
  }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this._dataService.getHospitalizations();
  }
}
