import { HttpErrorResponse } from '@angular/common/http';

export interface IHttpErrorHandler<HttpErrorResponse> {
  statusCode: string | number;
  message: string;
  error: HttpErrorResponse;
}
export class HttpError implements IHttpErrorHandler<HttpErrorResponse> {
  statusCode: string | number;
  message: string;
  error: any;

  constructor(error: HttpErrorResponse) {
    this.statusCode = error.status;
    this.message = error.message;
    this.error = error;
  }
}
