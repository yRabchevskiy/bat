import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { ISoldier, IVisit, IVisitPostData } from '../Models/soldiers';
import { IApiRes } from '../Models/api';
import { IBatStructure, IStructurePostData, IUnit } from '../Models/Structure/structure';
import { IAuth, IUser } from '../Store/interfaces/user';

@Injectable()
export class ApiService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  checkAuth(): Observable<boolean> { return this.doPost('/auth/auth-check', {}); }
  
  login(data: IAuth): Observable<IApiRes<IUser>> {
    return this.doLogin('/auth', data);
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
    return this.doGet('/structure');
  }

  addStructureItem(data: IStructurePostData): Observable<IApiRes<IBatStructure>> {
    return this.doPost<IUnit>('/structure/add-structure-item', data);
  }

  // USERS
  getUsers(): Observable<IApiRes<IUser[]>> {
    return this.doGet('/users');
  }
}