import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { Company } from '../../../Models/Company';
import { CompanyService } from '../../../Services/companies.service';
@Component({
    selector: 'companydetail',
    templateUrl: './companyDetail.component.html',
    styleUrls: ['./companyDetail.component.css']
})
export class CompanyDetail implements OnInit {
    @Input() company: Company;
    @Input() companies: Company[];

    logMessage: string;

    constructor(private companyService: CompanyService) { }

    ngOnInit() { }

    save() {
        if (this.company._id) {
            this.logMessage= JSON.stringify(this.company);

            this.companyService.update(this.company).subscribe(data => {
                this.logMessage="post update company " + JSON.stringify( data);
                this.company.updateDate = data.updateDate;
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
                
                var i = 0;
                this.companies.forEach(element => {
                    if (!element._id)
                    {
                        this.companies.splice(i, 1);        
                    }  
                    i++;
                });
                this.companies.push(item);
                this.company = item;
            });
    }
}
