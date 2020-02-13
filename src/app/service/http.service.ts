import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };
  constructor(private http: HttpClient) { }

  get<T>(url: string, cb?: {
    success: Function,
    error?: Function,
    complete?: Function
  }, option?: object) {
    this.http.get<T>(url, option).subscribe(
      (res: T) => {
        cb.success(res);
      },
      (e) => {
        cb.error(e);
      },
      () => {
        cb.complete();
      }
    )
  }

  post<T>(url, body: object | string | null, cb: {
    success: Function,
    error?: Function,
    complete?: Function
  }, option?: any) {
    option = option ? option : this.httpOptions;
    body = qs.stringify(body);
    this.http.post<T>(url, body, option).subscribe(
      (res) => {
        cb.success(res);
      },
      (error: HttpErrorResponse) => {
        cb.error(error);
      },
      () => {
        cb.complete();
      }
    )
  }

  handleError(error: HttpErrorResponse) {

  }
}
