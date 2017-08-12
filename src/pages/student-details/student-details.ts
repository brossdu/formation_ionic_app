import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../models/student';
import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the StudentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {
  id: number;
  firstname: string;
  lastname: string;
  student?: Student;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
      this.id = navParams.get('id')
      this.lastname = navParams.get('lastname')
      this.firstname = navParams.get('firstname')

      api.getStudentById(this.id).subscribe(student => {
        this.student = student;
        this.firstname = student.name.first;
        this.lastname = student.name.last;
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
