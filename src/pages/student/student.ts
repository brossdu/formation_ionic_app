import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Student } from '../../models/student';
import {  ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})

export class StudentPage {

  students: Student[];
  referenceStudents: Student[];
  search: string = "";
  error:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {

    this.api.getStudents().subscribe(students => {
      students.sort(function(a, b) {
        if(a.name.first < b.name.first)
          return -1
        return 1;
      })

      this.students = students;
      this.referenceStudents = students;
    }, err => this.error = err,)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  shouldShowCancel(){
    return this.search != "";
  }

  onInput(event){
    this.students = this.referenceStudents
    this.students = this.students.filter(student => (student.name.first.indexOf(this.search) != -1 ||  student.name.last.indexOf(this.search) != -1))
  }

  onCancel(event){
    this.students = this.referenceStudents
  }

  studentTapped(event,student){
    this.navCtrl.push('StudentDetailsPage', {
      id:student.id,
      lastname: student.name.last,
      firstname: student.name.first
    })
  }
}
