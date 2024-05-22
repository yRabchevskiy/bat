import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BLOOD_TYPES,
  IListItem,
  RANK_TYPES,
  SEX_TYPE,
} from '../../../Models/general';
import {
  BLOOD_TYPES_LIST,
  RANK_TYPES_LIST,
  SEX_TYPE_LIST
} from '../../../Models/General_Lists/general_lists';
import { SoldiersService } from '../../../Services/soldiers.service';
import { Router } from '@angular/router';

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
      unit: new FormControl<string | null>(''),
    }),
    // visits: new FormArray([
    //   new FormGroup({
    //     date_in: new FormControl<Date | null>(new Date(Date.now())),
    //     date_out: new FormControl<Date | null>(null),
    //     pre_diagnosis: new FormControl<string | null>(''),
    //     final_diagnosis: new FormControl<string | null>(''),
    //     hospital_name: new FormControl<string | null>(''),
    //     type_of_visit: new FormControl<TYPE_OF_VISIT>(TYPE_OF_VISIT.AMBULATORY),
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
  // readonly disease_types: IListItem<TYPE_OF_DISEASE>[] = TYPE_OF_DISEASE_LIST;
  // readonly visits_types: IListItem<TYPE_OF_VISIT>[] = TYPE_OF_VISIT_LIST;
  // Type_of_Visit = TYPE_OF_VISIT;
  constructor(private _SoldiersService: SoldiersService, private router: Router) {}

  ngOnInit() {
    
  }

  save() {
    this._SoldiersService.postSoldier(this.soldierForm?.value);
    this.soldierForm.reset();
    this.cancel();
  }

  cancel() {
    this.soldierForm.reset();
    this.router.navigate(['/soldiers']);
  }

  get ranks() {
    return this.soldierForm?.get('rank') as FormArray;
  }
}
