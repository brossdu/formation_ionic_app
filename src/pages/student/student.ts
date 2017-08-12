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

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {

    api.getStudents().subscribe(students => {
      students.sort(function(a, b) {
        if(a.name.first < b.name.first)
          return -1
        return 1;
      })

      this.students = students;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  studentTapped(event,student){
    this.navCtrl.push('StudentDetailsPage', {
      id:student.id,
      lastname: student.name.last,
      firstname: student.name.first
    })
  }
}
