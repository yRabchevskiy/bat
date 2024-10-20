import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IStructure } from '../../../../Models/Structure/structure';

@Component({
  selector: 'app-structure-item-form',
  templateUrl: './structure-item-form.component.html',
  styleUrl: './structure-item-form.component.scss'
})
export class StructureItemFormComponent {
  @Input() loading: boolean = false;
  @Output() onSave: EventEmitter<IStructure> = new EventEmitter<IStructure>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  
  structureItemForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    data: new FormArray<any>([])
  });

  constructor() {}

  

  onSubmit() {
    this.onSave.emit(this.structureItemForm.value);
  }

  closeForm() {
    this.onClose.emit(true);
  }
}
