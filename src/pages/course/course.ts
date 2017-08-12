import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Course } from '../../models/Course';
import {  ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the CoursePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses :Course[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.api.getCourses().subscribe(courses => {
      this.courses = courses;
    })
  }

  courseTapped(event,course){
    this.navCtrl.push('CourseDetailPage', {
        course:course
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

}
