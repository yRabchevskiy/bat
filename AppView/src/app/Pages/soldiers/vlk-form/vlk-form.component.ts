import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISoldier } from '../../../Models/soldiers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitsService } from '../../../Services/visit.service';

@Component({
  selector: 'app-vlk-form',
  templateUrl: './vlk-form.component.html',
  styleUrl: './vlk-form.component.scss',
})
export class VlkFormComponent implements OnInit {
  vlkForm: FormGroup = new FormGroup({
    vlc_number: new FormControl<string>('', Validators.required),
    vlc_date: new FormControl<Date | null>(null, Validators.required),
    hospital_name: new FormControl<string>('', Validators.required),
    diagnosis: new FormControl<string>('', Validators.required),
    recomendation: new FormControl<string>('', Validators.required),
  });
  @Input() soldier!: ISoldier;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _VisitsService: VisitsService) {}

  ngOnInit() {}
  save() {
    // this.vlkForm.controls['soldier'].patchValue(this.soldier._id);
    // this._VisitsService.postVisit(this.vlkForm?.value);
    this.cancel();
  }

  cancel() {
    this.vlkForm.reset();
    this.onClose.emit(false);
  }
}
