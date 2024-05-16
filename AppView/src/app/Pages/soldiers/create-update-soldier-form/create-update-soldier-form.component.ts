import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISoldier } from '../../../Models/soldiers';

@Component({
  selector: 'app-create-update-soldier-form',
  templateUrl: './create-update-soldier-form.component.html',
  styleUrl: './create-update-soldier-form.component.scss'
})
export class CreateUpdateSoldierFormComponent {
  soldierForm = this.fb.group({
    full_name: ['', Validators.required], 
    birthday: [''],
    editional_data: this.fb.group({
      blood_type: [''],
      rank: [''],
      sex_type: [''],
      address: [''],
      phone: [''],
      summoned: [''],
      summoned_date: [''],
      unit: [''],
    }),
    visits: []
  });

  constructor(private fb: FormBuilder) { };

  addSoldier() {
    console.log(this.soldierForm.value);
  }
}
