import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISoldier } from '../../../../Store/interfaces/soldiers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../Store/state/app.state';
import {
  postRemission,
  postRemissionSuccess,
} from '../../../../Store/actions/remission.action';
import {
  getDiffOfDays,
} from '../../../../Helpers/soldier.helper';
import { IRemissionPostData } from '../../../../Store/interfaces/remission';
import {
  IListItem,
  RANK_TYPES,
} from '../../../../Store/interfaces/Enums/general';
import { RANK_TYPES_LIST } from '../../../../Models/General_Lists/general_lists';
import {
  selectRemissionStateError,
  selectRemissionStateLoading,
} from '../../../../Store/selectors/remission.selector';
import { Subject, takeUntil } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-remission-form',
  templateUrl: './remission-form.component.html',
  styleUrl: './remission-form.component.scss',
  standalone: false,
})
export class RemissionFormComponent {
  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  filteredRanks: IListItem<RANK_TYPES>[] = [];
  addMore: boolean = true;
  remissionForm = new FormGroup({
    soldier_id: new FormControl<string>(''),
    rank: new FormControl<string>(
      this.rank_types[0].value,
      Validators.required
    ),
    name: new FormControl<string>('', Validators.required),
    union: new FormControl<string>('', Validators.required),
    start_date: new FormControl<Date | null>(null, Validators.required),
    end_date: new FormControl<Date | null>(null, Validators.required),
    diagnosis: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
  });

  diffOfDays: number | null | undefined = undefined;
  tomorrow: Date = new Date();

  @Input() rangeDates: Date[] | undefined = undefined;
  private _soldier: ISoldier | undefined = undefined;
  get soldier() {
    return this._soldier;
  }

  @Input() set soldier(val: ISoldier | undefined) {
    this._soldier = val;
  }

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  loading = this.store.select(selectRemissionStateLoading);
  error = this.store.select(selectRemissionStateError);

  destroyed$ = new Subject<boolean>();

  constructor(createSuccess$: Actions, private store: Store<IAppState>) {
    createSuccess$
      .pipe(ofType(postRemissionSuccess), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.actionAfterSave();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit() {
    this.filteredRanks = [...this.rank_types];
    this.buildForm();
  }

  buildForm() {
    if (!this.rangeDates || this.rangeDates.length < 2) return;
    this.diffOfDays = getDiffOfDays(
      this.rangeDates[0],
      this.rangeDates[this.rangeDates.length - 1]
    );
    this.tomorrow.setDate(
      this.rangeDates[this.rangeDates.length - 1].getDate() + 1
    );

    this.remissionForm.patchValue({
      start_date: this.rangeDates[0],
      end_date: this.rangeDates[this.rangeDates.length - 1],
    });
    this.setSoldierData();
  }

  setSoldierData() {
    if (this.soldier) {
      this.remissionForm.patchValue({
        soldier_id: this.soldier._id,
        rank:
          this.soldier.rank && this.soldier.rank.length
            ? this.soldier.rank[this.soldier.rank.length - 1].value
            : this.rank_types[0].value,
        name: this.soldier.name,
        union: this.soldier.editional_data?.unit || '',
      });
    }
  }

  setupDefaultValues() {
    this.remissionForm.patchValue({
      soldier_id: '',
      description: '',
      rank: this.rank_types[0].value,
      name: '',
      union: '',
      diagnosis: '',
      start_date: null,
      end_date: null,
    });
  }

  save() {
    if (this.remissionForm.invalid) return;
    this.store.dispatch(
      postRemission({ data: this.remissionForm.value as IRemissionPostData })
    );
  }

  actionAfterSave() {
    if (this.addMore) {
      this.setupDefaultValues();
      this.buildForm();
      this.filteredRanks = [...this.rank_types];
      return;
    }
    this.cancel();
  }

  cancel() {
    this.onClose.emit(false);
  }

  search(event: AutoCompleteCompleteEvent) {
    if (!event.query || !event.query.length) {
      this.filteredRanks = [...this.rank_types];
      return;
    }
    let query = event.query.toLowerCase();

    this.filteredRanks = this.rank_types.filter(
      (it) => it.label.toLowerCase().indexOf(query) == 0
    );
  }

  onDateChange(e: Date, field: string) {
    const end_control = this.remissionForm.get('end_date') as FormControl;
    const end_date = end_control.value;
    if (field === 'start_date') {
      this.diffOfDays = getDiffOfDays(e, end_date);
      return;
    }
    const start_control = this.remissionForm.get('start_date') as FormControl;
    const start_date = start_control.value;
    this.diffOfDays = getDiffOfDays(start_date, e);
    const updateTommorow = new Date().setDate(end_date.getDate() + 1);
    this.tomorrow = new Date(updateTommorow);
  }
}
