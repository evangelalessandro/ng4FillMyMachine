import { Component, OnInit } from '@angular/core';
import { tipicamionModel } from '../../../Models/tipicamionModel'
import { tipiCamionService } from '../../../Services/tipiCamion.service';
import { ToastServiceUtils } from '../../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { enTastyType } from '../../../Utils/ToastServiceUtils';
import { masterDetail_MasterComponent } from '../../Base/masterDetail_MasterComponent';

@Component({
     selector: 'tipicamion',
     templateUrl: './tipiCamion.component.html',
    styles:['./tipicamion.component.css']
})

export class tipiCamionComponent extends masterDetail_MasterComponent<tipicamionModel>
{    
    constructor(private serviceObj: tipiCamionService,
        private toastySer: ToastServiceUtils,
        private dialogSer: DialogService) {

        super(serviceObj, toastySer, dialogSer)

    }

    addNew() {
        this.logMessage = "log vuoto";
        this.selectedItem = new tipicamionModel;
    }

}