declare var google: any;

import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'search-truck',
  templateUrl: './search-truck.component.html',
  styleUrls: ['./search-truck.component.css']
})

export class SearchTruckComponent implements OnInit {

  model: searchTruck = new searchTruck();
  @ViewChild('f') form: any;
  dateDisponibili: string[] = [];
  constructor() {
  }

  ngOnInit() {

    
     for (let i = 0; i < 15; i++) {
    
      var someDate = new Date();
      
      someDate.setDate(someDate.getDate() + 1);
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
      this.dateDisponibili.push((testoData).(someDate.toLocaleDateString()));
    }
  }


  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }


}
class searchTruck {
  constructor(public source: string = '',
    public destination: string = '',
    public date: Date = new Date(),
  ) {
  }
}
