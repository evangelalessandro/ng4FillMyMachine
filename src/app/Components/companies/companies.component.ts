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

  delete(company) {
      var companies = this.companies;
      console.log("Pre delete company ", company._id);

      this.companyService.delete(company._id).subscribe(data => {
          console.log("Delete company post chiamata servizio ", data);

          if (data.n == 1) {
              for (var i = 0; i < companies.length; i++) {
                  if (companies[i]._id == company._id) {
                      companies.splice(i, 1);
                  }
              }
          }
      });
  }

  update(company) {
      console.log("Pre update company ", this.companies);
      this.companyService.update(company).subscribe(data => {
          console.log("post update company ", data);
          //company = data;
      });
  }  
}
