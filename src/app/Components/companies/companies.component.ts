import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { CompanyService } from '../../Services/companies.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';

import { enTastyType } from '../../Utils/ToastServiceUtils';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    companies: Company[];
    logMessage: string;
   
    selectedCompany: Company;
    messageAlert: string;

    ngOnInit() {
    }

    constructor(private companyService: CompanyService,
        private toastyService: ToastServiceUtils) {
        this.companyService.getall()
            .subscribe(companies => {
                this.companies = companies;
                this.logMessage = JSON.stringify(companies);

            });
        
    }



    companyUpdated(company: Company) {

        console.log("ToastServiceUtils " + this.toastyService);   
        this.toastyService.addToast(enTastyType.success,
            "Success", "Azienda aggiornata", 5000);
        this.undoSelect();
    }

    companyCreated(company: Company) {

        this.toastyService.addToast(enTastyType.success, "Salvataggio", "Azienda inserita")

        this.companies.push(company);
        // this.companies.unshift(company);
        this.undoSelect();
    }
    undoSelect() {
        this.selectedCompany = undefined;
        

    }
    addNew() {
 
        this.logMessage = "log vuoto";
        //var i = 0;
        /*        this.companies.forEach(element => {
                    i++;
                    if (element._id) {
                        //ne aggiungo al massimo uno
                        this.companies.splice(i, 1);
                    }
                });
          */
        this.selectedCompany = new Company();


    }

    onSelect(company: Company): void {
        ///https://angular.io/docs/ts/latest/tutorial/toh-pt2.html esempio seleect element
        this.selectedCompany = company;
        this.logMessage = JSON.stringify(company);
 
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

            this.toastyService.addToast(enTastyType.info,"Cancellazione","Azienda cancellata")
            
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
