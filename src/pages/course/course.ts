import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  courses = [
{
	"id":1,
	"name": "Les bases de la programmation",
	"location": {
		"street": "Rue Roger-de-Guimps 41",
        "city": "Yverdon-les-Bains",
		"state": "vaud",
        "postcode": 1400,
        "lng":6.633681,
        "lat":46.773462 
	},
	"sessions":[
		{
			"startDate":"2017-08-15 09:00:00",
			"endDate":"2017-08-15 12:00:00"
		},
		{
			"startDate":"2017-09-15 09:00:00",
			"endDate":"2017-09-15 12:00:00"
		},
		{
			"startDate":"2017-10-15 09:00:00",
			"endDate":"2017-10-15 12:00:00"
		},
		{
			"startDate":"2017-11-15 09:00:00",
			"endDate":"2017-11-15 12:00:00"
		}
	]
},
{
	"id":2,
	"name": "Programmation orientée objet",
	"location": {
		"street": "Avenue de la gare 14",
        "city": "Saintes-Croix",
		"state": "vaud",
        "postcode": 1450,
        "lng":6.500120,
        "lat":46.821590 
	},
	"sessions":[
		{
			"startDate":"2017-08-15 09:00:00",
			"endDate":"2017-08-15 12:00:00"
		},
		{
			"startDate":"2017-09-15 09:00:00",
			"endDate":"2017-09-15 12:00:00"
		},
		{
			"startDate":"2017-10-15 09:00:00",
			"endDate":"2017-10-15 12:00:00"
		},
		{
			"startDate":"2017-11-15 09:00:00",
			"endDate":"2017-11-15 12:00:00"
		}
	]
},
{
	"id":3,
	"name": "Design et expérience utilisateur",
	"location": {
		"street": "Rue de Châtelard 5",
        "city": "Payerne",
		"state": "vaud",
        "postcode": 1530,
        "lng":6.934812,
        "lat":46.818363
	},
	"sessions":[
		{
			"startDate":"2017-08-15 09:00:00",
			"endDate":"2017-08-15 12:00:00"
		},
		{
			"startDate":"2017-09-15 09:00:00",
			"endDate":"2017-09-15 12:00:00"
		},
		{
			"startDate":"2017-10-15 09:00:00",
			"endDate":"2017-10-15 12:00:00"
		},
		{
			"startDate":"2017-11-15 09:00:00",
			"endDate":"2017-11-15 12:00:00"
		}
	]
},
{
	"id":4,
	"name": "Programmation JavaScript avancée",
	"location": {
		"street": "Rue Roger-de-Guimps 41",
        "city": "Yverdon-les-Bains",
		"state": "vaud",
        "postcode": 1400,
        "lng":6.633681,
        "lat":46.773462 
	},
	"sessions":[
		{
			"startDate":"2017-08-15 09:00:00",
			"endDate":"2017-08-15 12:00:00"
		},
		{
			"startDate":"2017-09-15 09:00:00",
			"endDate":"2017-09-15 12:00:00"
		},
		{
			"startDate":"2017-10-15 09:00:00",
			"endDate":"2017-10-15 12:00:00"
		},
		{
			"startDate":"2017-11-15 09:00:00",
			"endDate":"2017-11-15 12:00:00"
		}
	]
},
{
	"id":5,
	"name": "Base de données",
	"location": {
		"street": "Rue Roger-de-Guimps 41",
        "city": "Yverdon-les-Bains",
		"state": "vaud",
        "postcode": 1400,
        "lng":6.633681,
        "lat":46.773462 
	},
	"sessions":[
		{
			"startDate":"2017-08-15 09:00:00",
			"endDate":"2017-08-15 12:00:00"
		},
		{
			"startDate":"2017-09-15 09:00:00",
			"endDate":"2017-09-15 12:00:00"
		},
		{
			"startDate":"2017-10-15 09:00:00",
			"endDate":"2017-10-15 12:00:00"
		},
		{
			"startDate":"2017-11-15 09:00:00",
			"endDate":"2017-11-15 12:00:00"
		}
	]
}
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  courseTapped(event,course){
    console.log("clic sur le cour avec l'id: "+course.id )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

}
