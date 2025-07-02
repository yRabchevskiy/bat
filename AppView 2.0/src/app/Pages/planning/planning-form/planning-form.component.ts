import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IListItem,
  RANK_TYPES,
  TYPE_OF_PLANNING,
} from '../../../Store/interfaces/Enums/general';
import {
  RANK_TYPES_LIST,
  TYPE_OF_PLANNING_LIST,
} from '../../../Models/General_Lists/general_lists';
import { Subject, takeUntil } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import {
  postPlanning,
  postPlanningSuccess,
} from '../../../Store/actions/planning.action';
import { IPlanningPostData } from '../../../Store/interfaces/planning';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-planning-form',
  standalone: false,

  templateUrl: './planning-form.component.html',
  styleUrl: './planning-form.component.scss',
})
export class PlanningFormComponent {
  readonly planning_types: IListItem<TYPE_OF_PLANNING>[] =
    TYPE_OF_PLANNING_LIST;

  readonly rank_types: IListItem<RANK_TYPES>[] = RANK_TYPES_LIST;
  filteredRanks: IListItem<RANK_TYPES>[] = [];

  @Input() selectedDate: Date | undefined = undefined;
  planningForm = new FormGroup({
    soldier_id: new FormControl<string>(''),
    type: new FormControl<string>(
      TYPE_OF_PLANNING.CONSULTATION,
      Validators.required
    ),
    planning_date: new FormControl<Date | null>(null, Validators.required),
    description: new FormControl<string>(''),

    rank: new FormControl<string>(
      this.rank_types[0].value,
      Validators.required
    ),
    name: new FormControl<string>('', Validators.required),
    union: new FormControl<string>('', Validators.required),
  });

  destroyed$ = new Subject<boolean>();

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(createSuccess$: Actions, private store: Store<IAppState>) {
    createSuccess$
      .pipe(ofType(postPlanningSuccess), takeUntil(this.destroyed$))
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
    this.planningForm.patchValue({
      planning_date: this.selectedDate || new Date(Date.now()),
    });
  }

  save() {
    if (this.planningForm.invalid) return;
    this.store.dispatch(
      postPlanning({ data: this.planningForm.value as IPlanningPostData })
    );
  }

  cancel() {
    this.onClose.emit();
  }

  actionAfterSave() {
    this.planningForm.reset();
    this.onClose.emit();
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
}
