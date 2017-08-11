import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Student } from '../../models/student';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url = 'http://localhost:3000'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getStudents(): Observable<Student[]> {
    console.log(this.http)
    return this.http.get(`${this.url}/students`)
      .map(res => <Student[]>res.json());
  }

}
