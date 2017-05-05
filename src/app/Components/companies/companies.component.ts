import { Component, OnInit } from '@angular/core';
import { Company } from '../../Models/Company';
import { CompanyService } from '../../Services/companies.service';
import { ToastServiceUtils } from '../../Utils/ToastServiceUtils';
import { ConfirmComponent } from '../../Utils/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { enTastyType } from '../../Utils/ToastServiceUtils';
import { masterDetail_MasterComponent } from '../Base/masterDetail_MasterComponent';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent extends masterDetail_MasterComponent<Company>
{

    constructor(private companySer: CompanyService,
        private toastySer: ToastServiceUtils,
        private dialogSer: DialogService) {

        super(companySer, toastySer, dialogSer)
    }

    Messages = {
        'info': {
            'messaggioConfermaCancellazione': "Azienda cancellata",
            'messaggioConfermaInserimento': "Azienda inserita",
            'messaggioConfermaAggiornamento': "Azienda aggiornata"
        }
    };
    addNew() {
        this.logMessage = "log vuoto";
        this.selectedItem = new Company;
    }

}
