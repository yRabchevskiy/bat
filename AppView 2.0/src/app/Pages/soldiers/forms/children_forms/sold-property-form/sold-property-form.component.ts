import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sold-property-form',
  templateUrl: './sold-property-form.component.html',
  styleUrl: './sold-property-form.component.scss',
})
export class SoldPropertyFormComponent {
  @Input() data!: FormGroup;
  @Input() id!: string;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  deleteItem() {
    this.onDelete.emit();
  }
}
