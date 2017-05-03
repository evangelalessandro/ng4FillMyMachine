import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { CompanyService } from '../../Services/companies.service';
import { companiesLocalService } from './companiesLocalService';

import { ReflectiveInjector } from '@angular/core';
import { OpaqueToken } from '@angular/core';


@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    companies: Company[];
    logMessage: string;
    modeNew: boolean;
    selectedCompany: Company;

    ScrollTop() {
        var pagina = document.getElementById("top");
        console.log(pagina.offsetTop);
 
    }
    
    ngOnInit() {
    }

    constructor(private companyService: CompanyService) {
        this.companyService.getall()
            .subscribe(companies => {
                this.companies = companies;
                this.logMessage = JSON.stringify(companies);

                const token = "companiesLocalService";

                let injector = ReflectiveInjector.resolveAndCreate([{ provide: token, useClass: companiesLocalService }]);
                let comp = injector.get(token);
                comp.companies = companies;
            });
        this.modeNew = false;
    }

    addNew() {

        this.modeNew = true;
        this.logMessage = "log vuoto";
        var i = 0;
        this.companies.forEach(element => {
            i++;
            if (element._id) {
                //ne aggiungo al massimo uno
                this.companies.splice(i, 1);
            }
        });
        this.selectedCompany = new Company();
        this.companies.push(this.selectedCompany);

    }

    onSelect(company: Company): void {
        ///https://angular.io/docs/ts/latest/tutorial/toh-pt2.html esempio seleect element
        this.selectedCompany = company;
        this.logMessage = JSON.stringify(company);

        this.modeNew = false;
    }
    /*   add(event) {
           event.preventDefault();
           var newCompany = new Company();
   
           this.companyService.add(newCompany)
               .subscribe(item => {
                   this.companies.push(item);
   
               });
           
          
       }*/

    delete(company) {
        var companies = this.companies;
        console.log("Pre delete company ", company._id);

        this.companyService.delete(company._id).subscribe(data => {
            console.log("Delete company post chiamata servizio ", data);
            //se trovato rimuovo
            if (data.n == 1) {
                for (var i = 0; i < companies.length; i++) {
                    if (companies[i]._id == company._id) {
                        companies.splice(i, 1);
                    }
                }
            }
        });
    }


}
