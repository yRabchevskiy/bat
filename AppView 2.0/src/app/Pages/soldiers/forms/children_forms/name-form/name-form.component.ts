import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
    selector: 'app-name-form',
    templateUrl: './name-form.component.html',
    styleUrl: './name-form.component.scss',
    standalone: false,
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class NameFormComponent {
  childForm: any;

  constructor( 
    public parentForm: FormGroupDirective,
    ) { }

  ngOnInit() {
    this.childForm = this.parentForm.form;
    this.childForm.addControl('name', new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      middle_name: new FormControl(''),
      last_name: new FormControl('', [Validators.required])
    }));
  }
}
