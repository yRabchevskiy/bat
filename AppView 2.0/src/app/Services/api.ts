import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { ISoldier, IVisit, IVisitPostData } from '../Models/soldiers';
import { IUser } from '../Models/user';
import { IApiRes } from '../Models/api';
import { IBatStructure, IStructure, IStructurePostData } from '../Models/Structure/structure';

@Injectable()
export class ApiService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  checkAuth(): Observable<boolean> { return this.doPost('/auth/auth-check', {}); }
  
  login(data: any): Observable<IApiRes<IUser>> {
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


  // STRUCTURE
  getStructure(): Observable<IApiRes<IBatStructure>> {
    return this.doGet<any[]>('/structure');
  }

  addStructureItem(data: IStructurePostData): Observable<IApiRes<IBatStructure>> {
    return this.doPost<IStructure>('/structure/add-structure-item', data);

  }
}