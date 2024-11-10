import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPersonnelData, IUnit } from '../../../../Models/Structure/structure';

@Component({
  selector: 'app-structure-item-form',
  templateUrl: './structure-item-form.component.html',
  styleUrl: './structure-item-form.component.scss'
})
export class StructureItemFormComponent {
  @Input() loading: boolean = false;
  @Output() onSave: EventEmitter<IUnit> = new EventEmitter<IUnit>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  unitItemForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    personnel: new FormArray<any>([]),
    units: new FormArray<any>([])
  });

  get personnel() {
    return this.unitItemForm.get('personnel') as FormArray;
  }

  get units() {
    return this.unitItemForm.get('units') as FormArray;
  }

  constructor() { }

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

  addUnit() {
    const _ = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      personnel: new FormArray<any>([]),
      units: new FormArray<any>([])
    });
    this.units.push(_);
  }

  removeUnit(i: number) {
    this.units.removeAt(i);
  }

  onSubmit() {
    console.log(this.unitItemForm.value)
    this.onSave.emit(this.unitItemForm.value);
  }

  closeForm() {
    this.onClose.emit(true);
  }
}
