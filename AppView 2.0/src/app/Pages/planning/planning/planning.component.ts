import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../Store/state/app.state';
import { getPlannings } from '../../../Store/actions/planning.action';
import { selectPlanningsStateError, selectPlanningsStateLoading } from '../../../Store/selectors/planning.selectors';
import { IPlanning } from '../../../Store/interfaces/planning';
import { format } from 'date-fns';

interface IPlanningCounter {
  [key: string | number]: number;
}
@Component({
  selector: 'app-planning',
  standalone: false,

  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss',
})
export class PlanningComponent {
  data: IPlanning[] = [];
  taskCounter: IPlanningCounter = {};
  error = this._store.select(selectPlanningsStateError);
  loading = this._store.select(selectPlanningsStateLoading);
  selectedDate: Date = new Date();

  showPlanningForm: boolean = false;

  
  constructor(private _store: Store<IAppState>) {
    this._store.select('plannings').subscribe((state) => {
      this.data = state.plannings;
      this.taskCounter = state.plannings.reduce((acc, item) => {
        const d = new Date(item.planning_date);
        const key = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {} as IPlanningCounter);
    });
  }

  ngOnInit(): void {
    if (!this.data || !this.data.length) {
      this._store.dispatch(getPlannings());
    }
  }

  onDateSelect($event: Date): void {
    this.selectedDate = $event;
    
  }

  openPlanningForm(): void {
    this.showPlanningForm = true;
  }

  closePlanningForm(): void {
    this.showPlanningForm = false;
  }

  getTaskCount(date: any): number | string {
    const key = `${date.day}-${date.month}-${date.year}`;
    return this.taskCounter[key] || '';
  }

}
