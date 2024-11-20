import { Component } from '@angular/core';
import { ApiService } from '../../../Services/api';
import { IVisit, IVisitPostData } from '../../../Store/interfaces/visit';

@Component({
  selector: 'app-hospitalisation',
  templateUrl: './hospitalisation.component.html',
  styleUrl: './hospitalisation.component.scss'
})
export class HospitalisationComponent {
 
  showVisitForm: boolean = false;

  constructor(private apiService: ApiService) {
  }

  // ngOnInit() {
  //   this.apiService.getVisits('/visits');
  // }
 
  // doGetData() {
  //   return this.apiService.getVisits();
  // }

  // override onDataReceived(res: IVisit[]) {
  //   super.onDataReceived(res);
  // }

  createVisit(data: IVisitPostData) {
    this.apiService.postVisit(data).subscribe({
      next: res => {
        // this.add(res);
        // this.selectedItem = res;
      },
      error: (err: any) => {
      }
    });
    this.showVisitForm = false;
  }

  openVisitForm(item?: IVisit) {
    if (item) {
      // this.selectedItem = item;
    }
    this.showVisitForm = true;
  }
  closeModalWindow() {
    this.showVisitForm = false;
  }
}
