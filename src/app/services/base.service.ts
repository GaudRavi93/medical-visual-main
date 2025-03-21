import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public http: HttpClient) {}

  /** Get Method */
  getRecords(url: any, params?: any): Promise<any> {
    return new Promise(async (resolve, reject) =>
      this.http.get(url, { params: params }).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          resolve([]);
        },
      })
    );
  }

  /** Post Method */
  postRecord(url: any, body: any): Promise<any> {
    return new Promise(async (resolve, reject) =>
      this.http.post(url, body).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          resolve([]);
        },
      })
    );
  }

  /** Put Method */
  putRecord(url: any, body: any): Promise<any> {
    return new Promise((resolve, reject) =>
      this.http.put(url, body).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          resolve([]);
        },
      })
    );
  }

  /** Delete Method */
  deleteRecord(url: any): Promise<any> {
    return new Promise(async (resolve, reject) =>
      this.http.delete(url).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          resolve([]);
        },
      })
    );
  }
}
