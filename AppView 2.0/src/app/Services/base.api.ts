import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpError, IHttpErrorHandler } from './httpErrorHandler';
import { IAuth } from '../Store/interfaces/user';

export class BaseApi {
  private apiURL = 'http://localhost:3000';
  requestOptions: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  };

  constructor(private _http: HttpClient) { }

  public doGet<T>(url: string): Observable<any> {
    return this._http.get<T>(this.getUrl(url), this.requestOptions).pipe(
      catchError(this.handlerHttpError) // then handle the error
    );
  }
  public doPost<T>(url: string, data: T): Observable<any> {
    return this._http.post<T>(this.getUrl(url), JSON.stringify(data), this.createParam()).pipe(
      catchError(this.handlerHttpError) // then handle the error
    );
  }
  public doDelete<T>(url: string, _id: string): Observable<any> {
    const param = this.createParam();
    return this._http.delete<T>(this.getUrl(url + `/${_id}`), param).pipe(
      catchError(this.handlerHttpError) // then handle the error
    );
  }

  public doLogin(url: string, data: IAuth): Observable<any> {
    return this._http.post<IAuth>(this.getUrl(url), JSON.stringify(data), this.createParam());
  }

  private createParam(obj?: Object) {
    if (!obj) return this.requestOptions;
    return {
      ...this.requestOptions,
      body: { ...obj },
    };
  }

  private getUrl(urlStr: string) {
    return this.apiURL + urlStr;
  }

  private handlerHttpError(error: HttpErrorResponse): Observable<IHttpErrorHandler<HttpErrorResponse>> {
    return throwError(() => new HttpError(error));
  }
}
