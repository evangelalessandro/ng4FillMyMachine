import { Component, OnInit, AfterViewInit } from '@angular/core';
import { caricoModel } from '../../Models/caricoModel'
import { carichiService } from '../../Services/carichi.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { enTastyType } from '../../Utils/ToastServiceUtils';


@Component({
    selector: 'carichiPrimeMode',
    templateUrl: './caricoPrimeMode.component.html',
    styleUrls: ['./caricoPrimeMode.component.css']
})
    
export class caricoPrimeMode implements OnInit {

    displayDialog: boolean;

    item: caricoModel = new caricoModel();

    selectedItem: caricoModel;

    newItem: boolean;

    itemList: caricoModel[];

    constructor(private carichiService: carichiService) { }

    ngOnInit() {
        this.carichiService.getall()
            .subscribe(carichi => {
                this.itemList = carichi;
             //   this.logMessage = JSON.stringify(companies);

            });    
          
    }

    showDialogToAdd() {
        this.newItem = true;
        this.item = new caricoModel();
        this.displayDialog = true;
    }

    save() {
        let itemList = [...this.itemList];
        if (this.newItem)
            itemList.push(this.item);
        else
            itemList[this.findSelectedCarIndex()] = this.item;

        this.itemList = itemList;
        this.itemList = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.itemList = this.itemList.filter((val, i) => i != index);
        this.itemList = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newItem = false;
        this.item = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: caricoModel): caricoModel {
        let carico = new caricoModel();
        for (let prop in c) {
            carico[prop] = c[prop];
        }
        return carico;
    }

    findSelectedCarIndex(): number {
        return this.itemList.indexOf(this.selectedItem);
    }
}
 