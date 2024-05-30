import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISoldier } from '../Models/soldiers';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SoldiersService {
  soldiers = new BehaviorSubject<ISoldier[]>([]);

  soldiersData = this.soldiers.asObservable();

  constructor(private _service: DataService) {}

  public getSoldiers() {
    this._service.get<ISoldier[]>('/soldier').subscribe((res) => {
      console.log(res)
      this.soldiers.next(res);
    });
  }
  public postSoldier(data: ISoldier) {
    return this._service
      .post<ISoldier>('/soldier', data)
      .subscribe((res) =>
        this.soldiers.next([...this.soldiers.getValue(), res])
      );
  }

  public deleteSoldier(id: string) {
    return this._service
      .delete<ISoldier>('/soldier', id)
      .subscribe((res) => {
        if (!res.id) return;
        const arr: ISoldier[] = this.soldiers.getValue();

        arr.forEach((item, index) => {
          if (item._id === res.id) { arr.splice(index, 1); }
        });

        this.soldiers.next(arr);
      });
  }

  // function to update the value of the BehaviorSubject
  // updateQuote(newQuote: string){
  //   this.qoute.next(newQuote);
  // }
}
