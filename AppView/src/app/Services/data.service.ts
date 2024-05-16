import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class DataService {
    private apiURL = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    public getData<T>(url: string): Observable<T> {
        return this.http.get<T>(this.apiURL + url);
    }
}
