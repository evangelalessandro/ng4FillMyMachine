import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { carico } from '../../../Models/carico';
import { carichiService } from '../../../Services/carichi.service';
import { CompanyService } from '../../../Services/companies.service';

import { Company} from '../../../Models/Company';

@Component({
    selector: 'caricodetail',
    templateUrl: './caricoDetail.component.html',
    styleUrls: ['./caricoDetail.component.css']
})
export class caricoDetail implements OnInit {
    @Input() carico: carico;
    @Input() carichi: carico[];
    companylist: Company[];
    logMessage: string;

    constructor(private service: carichiService, private companyService: CompanyService  ) {
        companyService.getall()
            .subscribe(companies => {
                this.companylist = companies;
                this.companylist.sort(function (a,  b)
                {
                    if (a.name > b.name)
                        return 1;
                    else if (a.name < b.name)
                        return -1;
                    else
                        return 0;    
                    }
                )
                
            });
     }

    ngOnInit() { }

    save() {
        if (this.carico._id) {
            this.logMessage = JSON.stringify(this.carico);

            this.service.update(this.carico).subscribe(data => {
                this.logMessage = "post update  " + JSON.stringify(data);
                this.carico.updateDate = data.updateDate;
            });
        }
        else {
            this.add();
        }
    }
    ///modalità nuovo
    add() {
        this.logMessage = "add " + JSON.stringify(this.carico);

        this.service.add(this.carico)
            .subscribe(item => {

                var i = 0;
                this.carichi.forEach(element => {
                    if (!element._id) {
                        this.carichi.splice(i, 1);
                    }
                    i++;
                });
                this.carichi.push(item);
                this.carico = item;
            });
    }
}
