import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { ISoldier, IVisit, IVisitPostData } from '../Models/soldiers';
import { IUser } from '../Models/user';

@Injectable()
export class ApiService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  checkAuth(): Observable<boolean> { return this.doPost('/auth/auth-check', {}); }
  
  login(data: any): Observable<IUser> {
    return this.doPost('/auth', data);
  }

  getSoldiers(): Observable<ISoldier[]> {
    return this.doGet<ISoldier[]>('/soldier');
  }

  getVisits(): Observable<IVisit[]> {
    return this.doGet<IVisit[]>('/visit');
  }

  postVisit(data: IVisitPostData): Observable<IVisit> {
    return this.doPost<IVisitPostData>('/visit', data);
  }
}