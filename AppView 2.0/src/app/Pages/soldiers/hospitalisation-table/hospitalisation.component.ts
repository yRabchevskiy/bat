import { Component } from '@angular/core';
import { IAppState } from '../../../Store/state/app.state';
import { Store } from '@ngrx/store';
import { selectHospitalizationList } from '../../../Store/selectors/soldier.selector';
import { getHospitalizations } from '../../../Store/actions/hospitalization.action';

@Component({
    selector: 'app-hospitalisation',
    templateUrl: './hospitalisation.component.html',
    styleUrl: './hospitalisation.component.scss',
    standalone: false
})
export class HospitalisationComponent {
  hospitalizations: any[] = [];
  showVisitForm: boolean = false;

  constructor(private _store: Store<IAppState>) {
    this._store.select(selectHospitalizationList).subscribe(_data => {
      this.hospitalizations = _data;
    });
  }

  ngOnInit(): void {
    if (!this.hospitalizations || !this.hospitalizations.length) {
      this._store.dispatch(getHospitalizations());
    }    
  }
  
}
