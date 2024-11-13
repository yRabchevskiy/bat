import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { TYPE_OF_DISEASE_LIST, TYPE_OF_VISIT_LIST, RANK_TYPES_LIST } from '../../../Models/General_Lists/general_lists';
import { ApiService } from '../../../Services/api';
import { RANK_TYPES, TYPE_OF_VISIT, TYPE_OF_DISEASE, TYPE_OF_VISIT_STATUS, IListItem } from '../../../Store/interfaces/Enums/general';
import { IVisit, IVisitPostData } from '../../../Store/interfaces/visit';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.scss',
})
export class VisitFormComponent implements OnInit { 
  visitForm: FormGroup = new FormGroup({
    soldier_name: new FormControl<string>('', [Validators.required]),
    rank: new FormControl<RANK_TYPES>(RANK_TYPES.SOLDIER),
    phone: new FormControl<string>(''),
    date_in: new FormControl<Date | null>(null, [Validators.required]),
    date_out: new FormControl<Date | null>(null),
    pre_diagnosis: new FormControl<string>('', [Validators.required]),
    in_diagnosis: new FormControl<string>(''),
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
  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  Type_of_Visit = TYPE_OF_VISIT;
  
  @Input() item: IVisit | undefined;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSave: EventEmitter<IVisitPostData> = new EventEmitter<IVisitPostData>();
  constructor(public _service: ApiService) {}

  ngOnInit() {
    
  }
  
  save(event: any) {
    event.preventDefault();
    this.onSave.emit(this.visitForm?.value);
  }

  cancel() {
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
