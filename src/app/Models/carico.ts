export class carico {
    _id: any;
    name: string;
    note: string;
    mobile1: string;
    email: string;
    creationDate: Date;
    updateDate: Date;
    //metri cubi
    mc3: number;
    //metri di camion
    meter: number;
    ///kg di carico
    kg: number;
    //tipo camion
    trucktype: number;

    nationSource: string;    
    citySource: string;
    locSource: {
        lon: number,
        lat: number
    };

    nationDest: string;
    cityDest: string;
    locDest: {
        lon: number,
        lat: number
    };

    idCompany: any;
}
