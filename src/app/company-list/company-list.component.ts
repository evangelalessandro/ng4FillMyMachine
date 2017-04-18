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
      var comp=(<Companies>value).companies;
      console.log(comp[0]);
      this.companyList=comp;
    });



  }

  ngOnInit() {
  }

}
export class Company {
   constructor(company:any) {
    if (company) {
      this.id = company.id;
      this.name = company.name;
      this.city = company.city;
      
      
    }
  }
  id: number;
  name: string;
  city?: string;
  date?: Date;
}

export class Companies {
  companies: Company[];
  numero: number;
}