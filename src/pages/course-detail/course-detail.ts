import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from "../../models/Course";
import { ApiProvider } from "../../providers/api/api";

/**
 * Generated class for the CourseDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  course?: Course
  courseId: String

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiProvider) {
    //this.course = this.navParams.get('course')
    this.courseId = navParams.get('courseID')
    this.api.getCourseById(this.courseId).subscribe(course => {
      this.course = course;
    })
  }
  sessionTapped($event, session) {
    console.log("session tapped")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }
}
