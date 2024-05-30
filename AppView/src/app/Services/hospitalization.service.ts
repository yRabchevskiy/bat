import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class HospitalizationsService {
  hospitalizations = new BehaviorSubject<any[]>([]);

  hospitalizationsData = this.hospitalizations.asObservable();

  constructor(private _service: DataService) {}

  public getHospitalizations() {
    this._service.get<any[]>('/visits').subscribe((res) => {
      this.hospitalizations.next(res);
    });
  }
//   public postSoldier(data: ISoldier) {
//     return this._service
//       .post<ISoldier>('/soldier', data)
//       .subscribe((res) =>
//         this.soldiers.next([...this.soldiers.getValue(), res])
//       );
//   }

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
