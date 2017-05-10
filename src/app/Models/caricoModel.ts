import { baseModel } from './baseModel';
import { Injectable,Inject } from '@angular/core';

@Injectable()
export class caricoModel extends baseModel {

    constructor() {
        super();

        this.source = new geoModel();
        this.destination = new geoModel();
        
    }
    name: string;
    note: string;
    mobile1: string;
    email: string;

    //metri cubi
    mc3: number;
    //metri di camion
    meter: number;
    ///kg di carico
    kg: number;
    //tipo camion
    idtipocamion: any;

    source: geoModel;


    destination: geoModel;

    idCompany: any;
    destinationCity: string;    
    sourceCity: string;    
}
@Injectable()
export class geoModel {
    nation: string;
    city: string;
    lng: number;
    lat: number;
}
