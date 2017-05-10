import { Component, OnInit,ReflectiveInjector, AfterViewInit } from '@angular/core';
import { caricoModel } from '../../Models/caricoModel'
import { carichiService } from '../../Services/carichi.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { enTastyType } from '../../Utils/ToastServiceUtils';
import { masterDetail_MasterComponent } from '../Base/masterDetail_MasterComponent';
import * as $ from "jquery";
 

@Component({
    selector: 'carichiList',
    templateUrl: './carichi.component.html',
    styleUrls: ['./carichi.component.css']
})
export class CarichiComponent extends masterDetail_MasterComponent<caricoModel>
    implements AfterViewInit 
{

    constructor(private companySer: carichiService,
        private toastySer: ToastServiceUtils,
        private dialogSer: DialogService) {

        super(companySer, toastySer, dialogSer)


    }
    ngAfterViewInit() {

        $(document).ready(function () {
            /**
            $(".twPc-StatValue").click(function () { 
                $(this).hide();
            }); */
        });
    }
    addNew() {
        this.logMessage = "log vuoto";
        
        this.selectedItem = new caricoModel(); 
    }

}
