import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html',
  styleUrl: './unit-item.component.scss'
})
export class UnitItemComponent {
  @Input() data!: FormGroup;
  @Input() id!: string;

  get personnel() {
    return this.data.get('personnel') as FormArray;
  }

  getFormGroup(group: any, i: number) {
    return  group.controls[i] as FormGroup;
  }
  
  addPersonal() {
    const _ = new FormGroup({
      name: new FormControl(''),
      rank: new FormControl(''),
      position: new FormControl(''),
      soldier_id: new FormControl(null)
    });
    this.personnel.push(_);
  }

  removePersonnel(i: number) {
    this.personnel.removeAt(i);
  }
}
