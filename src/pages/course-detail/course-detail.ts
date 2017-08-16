import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from "../../models/Course";
import { ApiProvider } from "../../providers/api/api";
import { Calendar } from "@ionic-native/calendar";

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
  CALENDAR_NAME:string = "Calendrier CPNV"
  myCPNVCalendar

  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiProvider, private calendar:Calendar) {
    //this.course = this.navParams.get('course')
    this.courseId = navParams.get('courseID')
    this.api.getCourseById(this.courseId).subscribe(course => {
      this.course = course;
    })
  }
  sessionTapped($event, session) {
    console.log("session tapped")
    console.log(session);
    this.calendar.createCalendar(this.CALENDAR_NAME).then(
      (msg) => {console.log(msg) },
      (err) => { console.log(err); }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }
}
