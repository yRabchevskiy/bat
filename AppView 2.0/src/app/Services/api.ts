import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base.api';
import { IApiRes } from '../Models/api';
import { IBatStructure, IStructurePostData, IUnit } from '../Models/Structure/structure';
import { IAuth, IUser } from '../Store/interfaces/user';
import { ISoldier } from '../Store/interfaces/soldiers';
import { IVisit, IVisitPostData } from '../Store/interfaces/visit';
import { IRemission, IRemissionPostData } from '../Store/interfaces/remission';
import { IPlanning } from '../Store/interfaces/planning';

@Injectable()
export class ApiService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  checkAuth(): Observable<boolean> { return this.doPost('/auth/auth-check', {}); }
  
  login(data: IAuth): Observable<IApiRes<IUser>> {
    return this.doLogin('/auth', data);
  }

  getSoldiers(): Observable<IApiRes<ISoldier[]>> {
    return this.doGet('/soldier');
  }

  postSoldier(data: ISoldier): Observable<IApiRes<ISoldier>> {
    return this.doPost('/soldier', data);
  }

  deleteSoldier(data: string): Observable<IApiRes<string>> {
    return this.doDelete('/soldier', data);
  }

  // Remissions
  getRemisions(): Observable<IApiRes<IRemission[]>> {
    return this.doGet('/remission');
  }

  postRemision(data: IRemissionPostData): Observable<IApiRes<IRemission>> {
    return this.doPost('/remission', data);
  }

  // Plannings
  getPlannings(): Observable<IApiRes<IPlanning[]>> {
    return this.doGet('/planning');
  }

  postPlanning(data: IPlanning): Observable<IApiRes<IPlanning>> {
    return this.doPost('/planning', data);
  }

  // Hospitalizations
  getHospitalizations(): Observable<IApiRes<any[]>> {
    return this.doGet('/hospitalization');
  }

  // Vlks
  getVlks(): Observable<IApiRes<any[]>> {
    return this.doGet('/vlk');
  }

  getVisits(): Observable<IVisit[]> {
    return this.doGet('/visit');
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