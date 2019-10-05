import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API: string = 'jsonplaceholder.typicode.com/todos/3';
@Injectable()
export class ApiProvider {
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  getData() {
    return this.http.get(API);
  }
}
