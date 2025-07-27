import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IVlk, IVlkPostData } from '../../../../Store/interfaces/vlk';
import {
  IListItem,
  RANK_TYPES,
} from '../../../../Store/interfaces/Enums/general';
import { RANK_TYPES_LIST } from '../../../../Models/General_Lists/general_lists';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../Store/state/app.state';
import { postVlk, postVlkSuccess } from '../../../../Store/actions/vlk.action';
import { Actions, ofType } from '@ngrx/effects';
import {
  selectVlkStateError,
  selectVlkStateLoading,
} from '../../../../Store/selectors/vlk.selectors';
import { Subject, takeUntil } from 'rxjs';
import { format } from 'date-fns';
import { parseVlkDate, parseVlkNumber } from '../../../../Helpers/soldier.helper';
@Component({
  selector: 'app-vlk-form',
  templateUrl: './vlk-form.component.html',
  styleUrl: './vlk-form.component.scss',
  standalone: false,
})
export class VlkFormComponent implements OnInit {
  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  filteredRanks: IListItem<RANK_TYPES>[] = [];
  vlkForm: FormGroup = new FormGroup({
    soldier_id: new FormControl<string>(''),
    name: new FormControl<string>('', Validators.required),
    rank: new FormControl<string>(
      this.rank_types[0].value,
      Validators.required
    ),
    position: new FormControl<string>(''),
    address: new FormControl<string>(''),
    union: new FormControl<string>(''),
    birthday: new FormControl<string>('', Validators.required),
    vlk_result: new FormControl<string>('', Validators.required),
    vlk_number: new FormControl<string>('', Validators.required),
    vlk_date: new FormControl<string>('', Validators.required),
    vlk_institution: new FormControl<string>('', Validators.required),
    diagnosis: new FormControl<string>('', Validators.required),
  });
  @Input() item: IVlk | undefined;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  loading = this.store.select(selectVlkStateLoading);
  error = this.store.select(selectVlkStateError);
  destroyed$ = new Subject<boolean>();
  constructor(createSuccess$: Actions, private store: Store<IAppState>) {
    createSuccess$
      .pipe(ofType(postVlkSuccess), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.actionAfterSave();
      });
  }

  ngOnInit() {
    this.filteredRanks = [...this.rank_types];
    this.setupVlkFormFields();
  }

  setupVlkFormFields() {
    if (this.item) {
      this.vlkForm.patchValue({
        name: this.item.name,
        rank: this.item.rank,
        position: this.item.position,
        address: this.item.address,
        union: this.item.union,
        birthday: this.item.birthday,
        vlk_result: this.item.vlk_result,
        vlk_number: parseVlkNumber(this.item.vlk_number),
        vlk_date: parseVlkDate(this.item.vlk_date),
        vlk_institution: this.item.vlk_institution,
        diagnosis: this.item.diagnosis,
      });
    }
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

  actionAfterSave() {
    // if (this.addMore) {
    //   this.setupDefaultValues();
    //   this.buildForm();
    //   this.filteredRanks = [...this.rank_types];
    //   return;
    // }
    this.cancel();
  }

  save() {
    if (this.vlkForm.invalid) return;
    const _vlk: IVlkPostData = { ...this.vlkForm.value };
    _vlk.vlk_date = format(new Date(this.vlkForm.get('vlk_date')?.value), 'dd.MM.yyyy')
    _vlk.vlk_number = '№' + this.vlkForm.get('vlk_date')?.value;
    this.store.dispatch(postVlk({ data: this.vlkForm.value as IVlkPostData }));
  }

  cancel() {
    this.vlkForm.reset();
    this.onClose.emit(false);
  }
}
