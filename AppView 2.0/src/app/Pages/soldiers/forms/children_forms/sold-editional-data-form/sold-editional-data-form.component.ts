import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { BLOOD_TYPES, IListItem, SEX_TYPE } from '../../../../../Store/interfaces/Enums/general';
import { BLOOD_TYPES_LIST, SEX_TYPE_LIST } from '../../../../../Models/General_Lists/general_lists';

@Component({
  selector: 'app-sold-editional-data-form',
  templateUrl: './sold-editional-data-form.component.html',
  styleUrl: './sold-editional-data-form.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SoldEditionalDataFormComponent {
  childForm: any;
  readonly blood_types: IListItem<BLOOD_TYPES>[] = BLOOD_TYPES_LIST;
  readonly sex_types: IListItem<SEX_TYPE>[] = SEX_TYPE_LIST;
  constructor(
    public parentForm: FormGroupDirective,
  ) { }

  ngOnInit() {
    this.childForm = this.parentForm.form;
    this.childForm.addControl('editional_data', new FormGroup({
      blood_type: new FormControl<BLOOD_TYPES>(BLOOD_TYPES.UNKNOWN),
      sex_type: new FormControl<SEX_TYPE>(SEX_TYPE.MALE),
      address: new FormControl<string | null>(''),
      summoned: new FormGroup({
        date: new FormControl<Date | null>(null),
        organization: new FormControl<string>(''),
      }),
      position: new FormControl<string | null>(''),
      unit: new FormControl<string | null>(''),
      description: new FormControl<string | null>(''),
    }));
  }
}
