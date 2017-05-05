
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';


@Component({
  selector: 'search-macchina',
  templateUrl: './search-macchina.component.html',
  styleUrls: ['./search-macchina.component.css'],
})

export class SearchmacchinaComponent implements OnInit {

  model: searchmacchina = new searchmacchina();
  @ViewChild('f') form: any;
  dateDisponibili: string[] = [];
  constructor() {
  }

  public addressSource: Object;

///http://www.angular2modules.com/google
  readAddress(place: Object) {
    
    this.model.partenza.address = place['formatted_address'];
    var location = place['geometry']['location'];
    this.model.partenza.lat = location.lat();
    this.model.partenza.lng = location.lng();
    console.log(place);
  }
  
  ngOnInit() {

    //data da oggi a + 21 giorni 
    for (let i = 0; i <= 21; i++) {
      var someDate = new Date();
      someDate.setDate(someDate.getDate() + i);
      var testoData = "";
      if (i == 0) {
        testoData = "Oggi";
      }
      else if (i == 1) {
        testoData = "Domani";
      }
      else if (i > 1) {
        testoData = "";
      }
      this.dateDisponibili.push(((testoData) + " " + (someDate.toLocaleDateString()).trim()));
    }
  }


  onSubmit() {
    console.log(this.addressSource);
    if (this.form.valid) {
      
      
    }
  }


}
class searchmacchina {

  partenza = {
    'address': '',
    'location': '',
    'lat': '',
    'lng': ''
  }
  destinazione = {
    'address': '',
    'location': '',
    'lat': '',
    'lng': ''
  }
  'data' :''
}
