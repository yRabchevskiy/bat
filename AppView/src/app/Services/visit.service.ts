import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { TYPE_OF_VISIT } from '../Models/general';
import { IVisit } from '../Models/soldiers';

@Injectable({
  providedIn: 'root',
})
export class VisitsService {
  visits = new BehaviorSubject<IVisit[]>([]);

  visitsData = this.visits.asObservable();

  constructor(private _service: DataService) {}

  public getVisits(type?: TYPE_OF_VISIT) {
    const _url = type && type !== undefined ? `/visits/${type}` : '/visits';
    this._service.get<IVisit[]>(_url).subscribe((res) => {
      this.visits.next(res);
    });
  }
  public postVisit(data: IVisit) {
    return this._service
      .post<IVisit>('/visits', data)
      .subscribe((res) =>
        this.visits.next([...this.visits.getValue(), res])
      );
  }

//   public deleteSoldier(id: string) {
//     return this._service
//       .delete<ISoldier>('/soldier', id)
//       .subscribe((res) => {
//         if (!res.id) return;
//         const arr: ISoldier[] = this.soldiers.getValue();

//         arr.forEach((item, index) => {
//           if (item._id === res.id) { arr.splice(index, 1); }
//         });

//         this.soldiers.next(arr);
//       });
//   }

  // function to update the value of the BehaviorSubject
  // updateQuote(newQuote: string){
  //   this.qoute.next(newQuote);
  // }
}
