import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class DataService {
  private apiURL = 'http://localhost:3000/api';
  requestOptions: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  };

  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<any> {
    return this.http.get<T>(this.apiURL + url, this.requestOptions);
  }
  public post<T>(url: string, data: T): Observable<any> {
    return this.http.post<T>(this.apiURL + url, data, this.createParam());
  }
  public delete<T>(url: string, _id: string): Observable<any> {
    const param = this.createParam({ id: _id });
    return this.http.delete<T>(this.apiURL + url, param );
  }

  private createParam(obj?: Object) {
    if (!obj) return this.requestOptions;
    return {
      ...this.requestOptions,
      body: { ...obj }
    }
  }
}
