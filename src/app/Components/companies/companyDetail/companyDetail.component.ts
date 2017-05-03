import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../Models/Company';
import { CompanyService } from '../../../Services/companies.service';
import { ReflectiveInjector } from '@angular/core';
import { OpaqueToken } from '@angular/core';
 

@Component({
    selector: 'companydetail',
    templateUrl: './companyDetail.component.html',
    styleUrls: ['./companyDetail.component.css']
})
export class CompanyDetail implements OnInit {
    @Input() company: Company;

    //eventi di creazione modifica e annullamento
    ////
    ///http://plnkr.co/edit/v3vmZkOK4fxDXsrziqHx?p=preview
    @Output() companyCreated = new EventEmitter<Company>();
    @Output() companyUpdated = new EventEmitter<Company>();
    @Output() undoSelect = new EventEmitter();

    logMessage: string;

    constructor(private companyService: CompanyService) { }

    ngOnInit() { }

    annulla()
    {
        this.undoSelect.emit();
    }

    save() {
        if (this.company._id) {
            this.logMessage= JSON.stringify(this.company);

            this.companyService.update(this.company).subscribe(data => {
                this.logMessage="post update company " + JSON.stringify( data);
                this.company.updateDate = data.updateDate;

                this.companyUpdated.emit(this.company);
                
            });
        }
        else {
            this.add();
        }
    }
    ///modalità nuovo
    add() {
        this.logMessage ="add company " + JSON.stringify( this.company);

        this.companyService.add(this.company)
            .subscribe(item => {
                this.company = item;

                this.companyCreated.emit(item);
            });
    }
}
