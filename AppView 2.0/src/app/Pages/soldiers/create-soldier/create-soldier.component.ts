import { Component, OnInit, } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RANK_TYPES_LIST, TYPE_OF_DISEASE_LIST } from '../../../Models/General_Lists/general_lists';
import { RANK_TYPES, IListItem, TYPE_OF_DISEASE } from '../../../Store/interfaces/Enums/general';
import { Router } from '@angular/router';
import { IAppState } from '../../../Store/state/app.state';
import { Store } from '@ngrx/store';
import { postSoldier } from '../../../Store/actions/soldier.action';
import { selectSoldierStateError, selectSoldierStateLoading } from '../../../Store/selectors/soldier.selector';

@Component({
    selector: 'app-create-soldier',
    templateUrl: './create-soldier.component.html',
    styleUrl: './create-soldier.component.scss',
    standalone: false
})

export class CreateSoldierComponent implements OnInit {
  soldierForm: FormGroup = new FormGroup({
    // name: new FormGroup({
    //   first_name: new FormControl<string | null>('', Validators.required),
    //   middle_name: new FormControl<string | null>(''),
    //   last_name: new FormControl<string | null>('', Validators.required)
    // }),
    // editional_data: new FormGroup({
    //   blood_type: new FormControl<BLOOD_TYPES>(BLOOD_TYPES.UNKNOWN),
    //   sex_type: new FormControl<SEX_TYPE>(SEX_TYPE.MALE),
    //   address: new FormControl<string | null>(''),
    //   summoned: new FormGroup({
    //     date: new FormControl<Date | null>(null),
    //     organization: new FormControl<string>(''),
    //   }),
    //   position: new FormControl<string | null>(''),
    //   unit: new FormControl<string | null>(''),
    //   description: new FormControl<string | null>(''),
    // }),
    birthday: new FormControl<Date | null>(null, Validators.required),
    phone: new FormControl<string | null>(''),
    rank: new FormArray([
      new FormGroup({
        date: new FormControl<Date | null>(null),
        value: new FormControl<RANK_TYPES>(RANK_TYPES.SOLDIER),
      }),
    ]),
    vlc: new FormArray([]),
    properties: new FormGroup({
      med_properties: new FormArray([]),
    }),
  });

  get med_properties(): FormArray {
    return (this.soldierForm.get('properties') as FormGroup).controls['med_properties'] as FormArray;
  }
  get vlcs() {
    return this.soldierForm?.get('vlc') as FormArray;
  }
  get ranks() {
    return this.soldierForm?.get('rank') as FormArray;
  }
  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  readonly disease_types: IListItem<TYPE_OF_DISEASE>[] = TYPE_OF_DISEASE_LIST;
  loading: boolean = false;
  error: string | null = null;
  constructor(private router: Router, private store: Store<IAppState>) {
    this.store.select(selectSoldierStateLoading).subscribe(it => {
      this.loading = it;
    });
    this.store.select(selectSoldierStateError).subscribe(it => {
      this.error = it;
    })
  }

  ngOnInit() { }
  getMedPropertyGroup(i: number) {
    return this.med_properties.controls[i] as FormGroup;
  }
  save() {
    this.store.dispatch(postSoldier({ data: this.soldierForm.value }));
    // this._SoldiersService.postSoldier(this.soldierForm?.value);
    // this.soldierForm.reset();
    // this.cancel();
  }

  cancel() {
    this.router.navigate(['/soldiers/table'])
  }

  addVlc() {
    const _item: FormGroup = new FormGroup({
      vlc_number: new FormControl<string>(''),
      vlc_date: new FormControl<Date | null>(null),
      hospital_name: new FormControl<string>(''),
      diagnosis: new FormControl<string>(''),
      recomendation: new FormControl<string>(''),
      description: new FormControl<string>(''),
    });
    this.vlcs.push(_item);
  }

  removeVlk(index: number) {
    this.vlcs.removeAt(index);
  }

  addMedProperty() {
    const _item: FormGroup = new FormGroup({
      value: new FormControl<string>(''),
      date: new FormControl<Date | null>(null),
      description: new FormControl<string>(''),
    });
    this.med_properties.push(_item);
  }

  removeMedProperty(index: number) {
    this.med_properties.removeAt(index);
  }

}
