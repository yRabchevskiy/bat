import { Component } from '@angular/core';
import { IVisit, IVisitPostData } from '../../../Models/soldiers';
import { ApiService } from '../../../Services/api';
import { ApiListComponent } from '../../../Services/list-api';

@Component({
  selector: 'app-hospitalisation',
  templateUrl: './hospitalisation.component.html',
  styleUrl: './hospitalisation.component.scss'
})
export class HospitalisationComponent extends ApiListComponent<IVisit> {
 
  showVisitForm: boolean = false;

  constructor(private apiService: ApiService) {
    super();
  }

  // ngOnInit() {
  //   this.apiService.getVisits('/visits');
  // }
 
  doGetData() {
    return this.apiService.getVisits();
  }

  override onDataReceived(res: IVisit[]) {
    super.onDataReceived(res);
  }

  createVisit(data: IVisitPostData) {
    this.apiService.postVisit(data).subscribe({
      next: res => {
        this.add(res);
        this.selectedItem = res;
      },
      error: (err: any) => {
      }
    });
    this.showVisitForm = false;
  }

  openVisitForm(item?: IVisit) {
    if (item) {
      this.selectedItem = item;
    }
    this.showVisitForm = true;
  }
  closeModalWindow() {
    this.showVisitForm = false;
  }
}
