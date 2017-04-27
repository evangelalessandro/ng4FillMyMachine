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
    log: string;

    constructor(private companyService: CompanyService) { }

    ngOnInit() { }

    save() {
        if (this.company._id) {
            console.log("update company ", this.company);

            this.companyService.update(this.company).subscribe(data => {
                console.log("post update company ", data);
                //company = data;
            });
        }
        else {
            this.add();
        }
    }
    add() {
        console.log("add company ", this.company);

         
        this.companyService.add(this.company)
            .subscribe(item => {
                // this.companies.push(item);

            });
    }
}
