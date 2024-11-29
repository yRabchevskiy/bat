import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISoldier } from '../../../../Store/interfaces/soldiers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../Store/state/app.state';
import { postRemission } from '../../../../Store/actions/remission.action';
import { selectSoldierStateLoading, selectSoldierStateError } from '../../../../Store/selectors/soldier.selector';

@Component({
  selector: 'app-remission-form',
  templateUrl: './remission-form.component.html',
  styleUrl: './remission-form.component.scss'
})
export class RemissionFormComponent {
  private _soldier!: ISoldier;
  get soldier() { return this._soldier; }
  @Input() set soldier(val: ISoldier) {
    this._soldier = val;
    this.buildForm(val);
  };
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  remissionForm!: FormGroup;
  loading = this.store.select(selectSoldierStateLoading);
  error = this.store.select(selectSoldierStateError);

  constructor(private store: Store<IAppState>) { }

  buildForm(val: ISoldier) {
    const _today = new Date(Date.now());
    const _endDate = new Date(_today);
    _endDate.setDate(_today.getDate() + 4);

    this.remissionForm = new FormGroup({
      soldier: new FormControl(val._id),
      start_date: new FormControl(_today, Validators.required),
      end_date: new FormControl(_endDate, Validators.required),
      diagnosis: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  save() {
    this.store.dispatch(postRemission({ data: this.remissionForm.value }));
  }

  cancel() {
    this.onClose.emit(false);
  }

}
