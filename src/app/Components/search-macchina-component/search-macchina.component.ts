
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

  public address: Object;


  getAddress(place: Object) {
    this.address = place['formatted_address'];
    var location = place['geometry']['location'];
    var lat = location.lat();
    var lng = location.lng();
    console.log("Address Object", place);
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
    if (this.form.valid) {
      console.log("Form Submitted!");

    }
  }


}
class searchmacchina {
  constructor(public source: string = '',
    public destination: string = '',
    public date: Date = new Date(),
  ) {
  }
}
