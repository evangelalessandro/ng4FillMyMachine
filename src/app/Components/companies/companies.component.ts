import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { CompanyService } from '../../Services/companies.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
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
        private toastyService: ToastServiceUtils,
        private dialogService: DialogService) {
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
        this.selectedCompany = new Company();
    }

    onSelect(company: Company): void {
        ///https://angular.io/docs/ts/latest/tutorial/toh-pt2.html esempio seleect element
        this.selectedCompany = company;
        this.logMessage = JSON.stringify(company);

    }
    showConfirm(titleMsg: string, messageTxt: string, functToExecute) {
        let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title: titleMsg,
            message: messageTxt
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    functToExecute();
                }
                else {

                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }

    delete(companyToDelete) {

        let company = companyToDelete;
        let comps = this.companies;
        let compService = this.companyService;
        let compTast = this.toastyService
        var a = function deletecompany() {

            var companies = comps;
            console.log("Pre delete company ", company._id);

            compService.delete(company._id).subscribe(data => {

                compTast.addToast(enTastyType.info, "Cancellazione", "Azienda cancellata")

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
        this.showConfirm("Conferma", "Sei sicuro che vuoi cancellare?", a);
    }
}
