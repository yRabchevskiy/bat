import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BLOOD_TYPES,
  IListItem,
  RANK_TYPES,
  SEX_TYPE,
  TYPE_OF_DISEASE,
  TYPE_OF_VISIT,
} from '../../../../Models/general';
import {
  BLOOD_TYPES_LIST,
  RANK_TYPES_LIST,
  SEX_TYPE_LIST,
  TYPE_OF_DISEASE_LIST,
  TYPE_OF_VISIT_LIST,
} from '../../../../Models/General_Lists/general_lists';

@Component({
  selector: 'app-create-soldier-form',
  templateUrl: './create-soldier-form.component.html',
  styleUrl: './create-soldier-form.component.scss',
})
export class CreateSoldierFormComponent implements OnInit {
  soldierForm: FormGroup = new FormGroup({
    full_name: new FormControl<string | null>('', Validators.required),
    birthday: new FormControl<Date | null>(null, Validators.required),
    phone: new FormControl<string | null>(''),
    rank: new FormArray([
      new FormGroup({
        date: new FormControl<Date | null>(null),
        type: new FormControl<RANK_TYPES>(RANK_TYPES.SOLDIER),
      }),
    ]),
    editional_data: new FormGroup({
      blood_type: new FormControl<BLOOD_TYPES>(BLOOD_TYPES.UNKNOWN),
      sex_type: new FormControl<SEX_TYPE>(SEX_TYPE.MALE),
      address: new FormControl<string | null>(''),
      summoned: new FormControl<string | null>(''),
      summoned_date: new FormControl<string | null>(''),
      position: new FormControl<string | null>(''),
      unit: new FormControl<string | null>(''),
      description: new FormControl<string | null>(''),
    }),
    vlc: new FormArray([
      new FormGroup({
        vlc_number: new FormControl<string>(''),
        vlc_date: new FormControl<Date | null>(null),
        hospital_name: new FormControl<string>(''),
        diagnosis: new FormControl<string>(''),
        recomendation: new FormControl<string>(''),
      }),
    ]),
    // visits: new FormArray([
    //   new FormGroup({
    //     date_in: new FormControl<Date | null>({ value: new Date(Date.now()), disabled: true }),
    //     date_out: new FormControl<Date | null>(null),
    //     pre_diagnosis: new FormControl<string | null>(''),
    //     final_diagnosis: new FormControl<string | null>(''),
    //     hospital_name: new FormControl<string | null>(''),
    //     type_of_visit: new FormControl<TYPE_OF_VISIT>({ value: TYPE_OF_VISIT.AMBULATORY, disabled: true }),
    //     type_of_disease: new FormControl<TYPE_OF_DISEASE>(
    //       TYPE_OF_DISEASE.DISEASE
    //     ),
    //     complaint: new FormControl<string | null>(''),
    //     recomendation: new FormControl<string | null>(''),
    //   })
    // ]),
  });
  readonly blood_types: IListItem<BLOOD_TYPES>[] = BLOOD_TYPES_LIST;
  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  readonly sex_types: IListItem<SEX_TYPE>[] = SEX_TYPE_LIST;
  readonly disease_types: IListItem<TYPE_OF_DISEASE>[] = TYPE_OF_DISEASE_LIST;
  
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  save() {
    // this._SoldiersService.postSoldier(this.soldierForm?.value);
    this.soldierForm.reset();
    this.cancel();
  }

  cancel() {
    this.soldierForm.reset();
    this.onClose.emit(false);
  }

  get vlcs() {
    return this.soldierForm?.get('vlc') as FormArray;
  }

  // get visits() {
  //   return this.soldierForm?.get('visits') as FormArray;
  // }
}
