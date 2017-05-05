import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { baseService } from '../../Services/base.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { enTastyType } from '../../Utils/ToastServiceUtils';
import { baseModel } from '../../Models/baseModel';


export class masterDetail_MasterComponent<T> implements OnInit {

    protected itemList: T[];
    protected logMessage: string;

    protected  selectedItem: T;
    protected  messageAlert: string;

    ngOnInit() {
    }

    constructor(private companyService: any,
        private toastyService: any,
        private dialogService: any)  {
        companyService.getall()
            .subscribe(companies => {
                this.itemList = companies;
                this.logMessage = JSON.stringify(companies);

            });

    }
    itemUpdated(company: T) {

        console.log("ToastServiceUtils " + this.toastyService);
        this.toastyService.addToast(enTastyType.success,
            "Success", "Azienda aggiornata", 5000);
        this.undoSelect();
    }

    itemCreated(item: T) {
        this.toastyService.addToast(enTastyType.success, "Salvataggio", "Azienda inserita")

        this.itemList.push(item);
        // this.companies.unshift(company);
        this.undoSelect();
    }
    undoSelect() {
        this.selectedItem = undefined;
    }
    // abstract  addNew()

    /**
     
      {
         this.logMessage = "log vuoto";
        this.selectedItem = new T;
     }*/


    onSelect(item: T): void {
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

        let a = function deleteItem() {
            console.log("Pre delete item", itemToDelete._id);

            this.companyService.delete(itemToDelete._id).subscribe(data => {

                this.toastyService.addToast(enTastyType.info,
                    "Info", "Azienda cancellata")

                console.log("Delete item post chiamata servizio ", data);
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

        this.showConfirm("Conferma", "Sei sicuro di voler cancellare?", a.bind(this));
    }
}
