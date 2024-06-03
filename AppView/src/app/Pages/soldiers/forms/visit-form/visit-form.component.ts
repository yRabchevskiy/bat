import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  IListItem,
  TYPE_OF_DISEASE,
  TYPE_OF_VISIT,
  TYPE_OF_VISIT_STATUS,
} from '../../../../Models/general';
import { VisitsService } from '../../../../Services/visit.service';
import {
  TYPE_OF_DISEASE_LIST,
  TYPE_OF_VISIT_LIST,
} from '../../../../Models/General_Lists/general_lists';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { ISoldier } from '../../../../Models/soldiers';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss',
})
export class VisitFormComponent implements OnInit {
  visitForm: FormGroup = new FormGroup({
    soldier: new FormControl<string>(''),
    date_in: new FormControl<Date | null>(null),
    date_out: new FormControl<Date | null>(null),
    pre_diagnosis: new FormControl<string | null>(''),
    final_diagnosis: new FormControl<string | null>(''),
    hospital_name: new FormControl<string | null>(''),
    type_of_visit: new FormControl<TYPE_OF_VISIT>(
      TYPE_OF_VISIT.HOSPITALIZATION
    ),
    type_of_disease: new FormControl<TYPE_OF_DISEASE>(TYPE_OF_DISEASE.DISEASE),
    complaint: new FormControl<string | null>(''),
    recomendation: new FormControl<string | null>(''),
    status: new FormControl<TYPE_OF_VISIT_STATUS>(TYPE_OF_VISIT_STATUS.ACTIVE),
  });
  readonly disease_types: IListItem<TYPE_OF_DISEASE>[] = TYPE_OF_DISEASE_LIST;
  readonly visits_types: IListItem<TYPE_OF_VISIT>[] = TYPE_OF_VISIT_LIST;
  Type_of_Visit = TYPE_OF_VISIT;
  
  @Input() soldier!: ISoldier;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _VisitsService: VisitsService) {}

  ngOnInit() {
    
  }
  
  save() {
    this.visitForm.controls['soldier'].patchValue(this.soldier._id);
    this._VisitsService.postVisit(this.visitForm?.value);
    this.cancel();
  }

  cancel() {
    this.visitForm.reset();
    this.onClose.emit(false);
  }

  onChangeTypeOfVisit($event: DropdownChangeEvent) {
    this.visitForm.reset();
    this.visitForm.controls['type_of_visit'].patchValue($event.value);
    this.visitForm.controls['type_of_disease'].patchValue(
      TYPE_OF_DISEASE.DISEASE
    );
    if ($event.value === TYPE_OF_VISIT.AMBULATORY) {
      this.visitForm.controls['date_in'].patchValue(new Date(Date.now()));
    }
  }
}
