import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import { caricoModel, geoModel } from '../../../Models/caricoModel';

import { tipiCamionModel } from '../../../Models/tipiCamionModel';
import { carichiService } from '../../../Services/carichi.service';
import { tipiCamionService } from '../../../Services/tipiCamion.service';
import { CompanyService } from '../../../Services/companies.service';
import { masterDetail_DetailComponent } from '../../Base/masterDetail_DetailComponent'
import { Company } from '../../../Models/Company';

@Component({
    selector: 'caricodetail',
    templateUrl: './caricoDetail.component.html',
    styleUrls: ['./caricoDetail.component.css']
})
export class caricoDetail extends masterDetail_DetailComponent<caricoModel>{

    companylist: Company[];
    tipicamionList: tipiCamionModel[];
    logMessage: string;

    source: geoModel;
    destination: geoModel;

    ngOnInit() {


        this.source = this.item.source;
        this.destination = this.item.destination;

    }


    constructor(private service: carichiService,
        private tipocamionService: tipiCamionService,
        private companyService: CompanyService) {
        super();


        tipocamionService.getall()
            .subscribe(tipocamion => {
                this.tipicamionList = tipocamion;
                this.tipicamionList.sort(function (a, b) {
                    if (a.name > b.name)
                        return 1;
                    else if (a.name < b.name)
                        return -1;
                    else
                        return 0;
                }
                )

            });

        companyService.getall()
            .subscribe(companies => {
                this.companylist = companies;
                this.companylist.sort(function (a, b) {
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

    getAddress(place: Object, source: boolean = false) {

        var adr_address = place['adr_address'];
        var n = adr_address.indexOf("country-name");


        if (n > 0) {
            adr_address = adr_address.substr(n + 14);

            // console.log(adr_address);
            n = adr_address.indexOf("</span>");

            var nation = adr_address.substr(0, n);

            var localita = place['formatted_address'];
            var location = place['geometry']['location'];
            //this.model.destinazione.location = location;
            //this.item.destination.nation = place['country'];
            var lat = location.lat();
            var lng = location.lng();

            let dest: any;
           
            if (source == false) {
                dest = this.item.source;
                this.item.sourceCity = localita;
            }
            else {
                dest = this.item.destination;
                this.item.destinationCity  = localita;
            }
            dest.nation = nation;
            dest.city = localita;
            dest.lat = lat;
            dest.lng = lng;
            
        }

        this.logMessage = JSON.stringify(this.item);
    }

    formErrors = {
        'name': '',
        'Email': '',
        'source': {
            'city': '',
            'nation': ''
        },
        'destination': {
            'city': '',
            'nation': ''
        }

    };

    validationMessages = {
        'source': {
            'city': {
                'required': 'Load city is required.',
            }
        },
        'destination': {
            'city': {
                'required': 'Email is required.'
            }
        }
    };
}
