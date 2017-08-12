import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from "../../models/Course";

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

  course: Course

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('course')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }
}
