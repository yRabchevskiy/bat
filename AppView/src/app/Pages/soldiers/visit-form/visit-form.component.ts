import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TYPE_OF_DISEASE, TYPE_OF_VISIT } from '../../../Models/general';
import { VisitsService } from '../../../Services/visit.service';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss',
})
export class VisitFormComponent implements OnInit {
  visitForm: FormGroup = new FormGroup({
    date_in: new FormControl<Date | null>(null),
    date_out: new FormControl<Date | null>(null),
    pre_diagnosis: new FormControl<string | null>(''),
    final_diagnosis: new FormControl<string | null>(''),
    hospital_name: new FormControl<string | null>(''),
    type_of_visit: new FormControl<TYPE_OF_VISIT>({
      value: TYPE_OF_VISIT.HOSPITALIZATION,
      disabled: true,
    }),
    type_of_disease: new FormControl<TYPE_OF_DISEASE>(TYPE_OF_DISEASE.DISEASE),
    complaint: new FormControl<string | null>(''),
    recomendation: new FormControl<string | null>(''),
  });
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _VisitsService: VisitsService) {}

  ngOnInit() {}
  save() {
    this._VisitsService.postVisit(this.visitForm?.value);
    this.visitForm.reset();
    this.cancel();
  }

  cancel() {
    this.visitForm.reset();
    this.onClose.emit(false);
  }
}
