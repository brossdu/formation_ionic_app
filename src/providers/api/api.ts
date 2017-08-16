import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Student } from '../../models/student';
import { Course } from "../../models/Course";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url = 'http://formation.apptitude.ch'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  private get(endpoint) {
    return this.http.get(`${this.url}/${endpoint}`)
  }

  getStudents(): Observable<Student[]> {
    return this.get('students')
      .map(res => <Student[]>res.json());
  }

  getStudentById(id): Observable<Student> {
    return this.get(`students/${id}`)
      .map(res => <Student>res.json());
  }

  getCourses(): Observable<Course[]> {
    return this.get('courses')
      .map(res => <Course[]>res.json());
  }

  getCourseById(id): Observable<Course> {
    return this.get(`courses/${id}`)
      .map(res => <Course>res.json());
  }
}
