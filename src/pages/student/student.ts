import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  students = [
        {
            "id":1,
            "gender": "female",
            "name": {
                "title": "madame",
                "first": "ana",
                "last": "marchand"
            },
            "location": {
                "street": "1015 rue des chartreux",
                "city": "bercher",
                "state": "schaffhausen",
                "postcode": 1391
            },
            "email": "ana.marchand@example.com",
            "dob": "1952-05-01 09:34:37",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/54.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
            },
            "nat": "CH"
        },
        {
            "id":2,
            "gender": "male",
            "name": {
                "title": "monsieur",
                "first": "gauthier",
                "last": "lefevre"
            },
            "location": {
                "street": "9112 rue du bât-d'argent",
                "city": "bussigny",
                "state": "zug",
                "postcode": 9290
            },
            "email": "gauthier.lefevre@example.com",
            "dob": "1982-05-20 17:05:20",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
            },
            "nat": "CH"
        },
        {
            "id":3,
            "gender": "female",
            "name": {
                "title": "mademoiselle",
                "first": "amelia",
                "last": "dufour"
            },
            "location": {
                "street": "7092 rue du dauphiné",
                "city": "mollens vd",
                "state": "valais",
                "postcode": 7853
            },
            "email": "amelia.dufour@example.com",
            "dob": "1977-10-04 15:33:39",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/30.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/30.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg"
            },
            "nat": "CH"
        },
        {
            "id":4,
            "gender": "female",
            "name": {
                "title": "mademoiselle",
                "first": "romane",
                "last": "gaillard"
            },
            "location": {
                "street": "7876 rue des écoles",
                "city": "renens vd 2",
                "state": "aargau",
                "postcode": 5839
            },
            "email": "romane.gaillard@example.com",
            "dob": "1983-09-18 15:30:35",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            },
            "nat": "CH"
        },
        {
            "id":5,
            "gender": "female",
            "name": {
                "title": "mademoiselle",
                "first": "eloïse",
                "last": "lecomte"
            },
            "location": {
                "street": "4272 rue duquesne",
                "city": "préverenges",
                "state": "basel-stadt",
                "postcode": 9761
            },
            "email": "eloïse.lecomte@example.com",
            "dob": "1984-03-29 07:07:20",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
            },
            "nat": "CH"
        },
        {
            "id":6,
            "gender": "female",
            "name": {
                "title": "madame",
                "first": "mélissa",
                "last": "da silva"
            },
            "location": {
                "street": "7509 rue des jardins",
                "city": "villars-tiercelin",
                "state": "glarus",
                "postcode": 9892
            },
            "email": "mélissa.dasilva@example.com",
            "dob": "1957-12-22 00:20:01",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/10.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            },
            "nat": "CH"
        }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  studentTapped(event,student){
    console.log("student taped:"+student.id )
  }
}
