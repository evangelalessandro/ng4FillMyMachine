import { baseModel } from './baseModel';

export class caricoModel extends baseModel {
    
    constructor()
    {
        super();
        
        this.source = new geoModel();
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
   

    destination: {
        nation: string;
        city: string;

        lng: number,
        lat: number
    };

    idCompany: any;
    
}
export class geoModel
{
    nation: string;
    city: string;
    lng: number;
    lat: number;
 }
