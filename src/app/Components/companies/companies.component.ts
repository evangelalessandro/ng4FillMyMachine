import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { CompanyService } from '../../Services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
    companies: Company[];
    title: string;
    note: string;
    
  constructor(private companyService:CompanyService){
        this.companyService.getall()
            .subscribe(companies => {
                this.companies = companies;
            });
    }

  ngOnInit() {
  }
  add(event){
        event.preventDefault();
        var newCompany = new Company();
            newCompany.name= this.title;
            newCompany.note= this.note,
            
        
        console.log("Pre add company ", newCompany.name, this.note );
        this.companyService.add(newCompany)
            .subscribe(item => {
                this.companies.push(item);
                this.title = '';
                this.note = '';
            });
    }
    

}
