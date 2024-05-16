import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoldier } from '../Models/soldiers';
import { DataService } from './data.service';

@Injectable()
export class SoldiersService {

    constructor(private _service: DataService) {}

    public getSoldiers(): Observable<ISoldier[]> {
        return this._service.getData<ISoldier[]>('/soldier');
    }
}
