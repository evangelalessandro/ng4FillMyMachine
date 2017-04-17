import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../Services/companies.service'


@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList: Company[] = [];

  constructor(private _companiesService: CompaniesService) {


    _companiesService.getCompanies().forEach((value) => {
      console.log("prova");
      var array= (value as Array<Companies>);
      console.log(array);
console.log("prova 2");
    });



  }

  ngOnInit() {
  }

}
export interface  Company {
  id: number;
  name: string;
  city?: string;
  date?: Date;
}

export interface Companies {
  companies: Company[];
}