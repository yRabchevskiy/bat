import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personnel-item',
  templateUrl: './personnel-item.component.html',
  styleUrl: './personnel-item.component.scss'
})
export class PersonnelItemComponent {
  @Input() data!: FormGroup;
  @Input() id!: string;
  
}
