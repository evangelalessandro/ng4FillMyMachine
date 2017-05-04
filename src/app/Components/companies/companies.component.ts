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

    itemList: Company[];
    logMessage: string;

    selectedItem: Company;
    messageAlert: string;

    ngOnInit() {
    }

    constructor(private companyService: CompanyService,
        private toastyService: ToastServiceUtils,
        private dialogService: DialogService) {
        this.companyService.getall()
            .subscribe(companies => {
                this.itemList = companies;
                this.logMessage = JSON.stringify(companies);

            });

    }
    itemUpdated(company: Company) {

        console.log("ToastServiceUtils " + this.toastyService);
        this.toastyService.addToast(enTastyType.success,
            "Success", "Azienda aggiornata", 5000);
        this.undoSelect();
    }

    itemCreated(company: Company) {
        this.toastyService.addToast(enTastyType.success, "Salvataggio", "Azienda inserita")

        this.itemList.push(company);
        // this.companies.unshift(company);
        this.undoSelect();
    }
    undoSelect() {
        this.selectedItem = undefined;
    }
    addNew() {
        this.logMessage = "log vuoto";
        this.selectedItem = new Company();
    }

    onSelect(item: Company): void {
        ///https://angular.io/docs/ts/latest/tutorial/toh-pt2.html esempio seleect element
        this.selectedItem = item;
        this.logMessage = JSON.stringify(item);

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

    delete(itemToDelete) {

        let a = function deletecompany() {
            console.log("Pre delete item", itemToDelete._id);

            this.companyService.delete(itemToDelete._id).subscribe(data => {

                this.toastyService.addToast(enTastyType.info, "Cancellazione", "Azienda cancellata")

                console.log("Delete itempost chiamata servizio ", data);
                //se trovato rimuovo
                if (data.n == 1) {
                    for (var i = 0; i < this.itemList.length; i++) {
                        if (this.itemList[i]._id == itemToDelete._id) {
                            this.itemList.splice(i, 1);
                        }
                    }
                }

            });
            console.log(itemToDelete._id, this.selectedItem._id);
            if (itemToDelete._id == this.selectedItem._id) {
                /////se quello che si cancella è quello che è selezionato, 
                /////viene rimosso il selezionato
                this.undoSelect();
            }
        }

        this.showConfirm("Conferma", "Sei sicuro che vuoi cancellare?", a.bind(this));
    }
}
