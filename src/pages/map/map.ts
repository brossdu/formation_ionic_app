import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";

declare var google: any;

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.api.getCourses().subscribe(courses => {
      if(courses.length > 0 ) {
        let mapEle = this.mapElement.nativeElement;
        let bounds = new google.maps.LatLngBounds();
        let markers = [];
        let map = new google.maps.Map(mapEle, {
          // center: {lat: courses[0].location.lat, lng:courses[0].location.lng},
          // zoom: 16
        });
        courses.forEach(course=>{
          console.log(bounds)
          //let point =new google.maps.LatLng({lat: course.location.lat, lng:course.location.lng})
           markers.push(new google.maps.Marker({
            position: {lat: course.location.lat, lng:course.location.lng},
            map: map,
            title: course.name
          }));
        })
        markers.forEach(marker => {
          bounds.extend(marker.getPosition())
        });

        map.fitBounds(bounds);        
      }
    })
  }

}
