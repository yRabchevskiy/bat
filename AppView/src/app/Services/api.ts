import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { ISoldier, IVisit, IVisitPostData } from '../Models/soldiers';

@Injectable()
export class ApiService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  getSoldiers(): Observable<ISoldier[]> {
    return this.doGet<ISoldier[]>('/soldier');
  }

  getVisits(): Observable<IVisit[]> {
    return this.doGet<IVisit[]>('/visits');
  }

  postVisit(data: IVisitPostData): Observable<IVisit> {
    return this.doPost<IVisitPostData>('/visits', data);
  }
}