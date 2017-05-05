import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { caricoModel } from '../../../Models/caricoModel';
import { carichiService } from '../../../Services/carichi.service';
import { CompanyService } from '../../../Services/companies.service';
import { masterDetail_DetailComponent } from '../../Base/masterDetail_DetailComponent'

import { Company} from '../../../Models/Company';

@Component({
    selector: 'caricodetail',
    templateUrl: './caricoDetail.component.html',
    styleUrls: ['./caricoDetail.component.css']
})
export class caricoDetail extends masterDetail_DetailComponent<caricoModel>{
   
    companylist: Company[];
    logMessage: string;

    constructor(private service: carichiService, private companyService: CompanyService)
    {
        super();

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

    
}
