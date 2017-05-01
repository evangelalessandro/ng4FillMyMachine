import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { baseService} from './base.service';

import 'rxjs/add/operator/map';

@Injectable()
export class carichiService extends baseService {
 
    constructor(private httpObject: Http) {
        super(httpObject);
        
         super.setSetting("Carichi",
            "http://localhost:3000/api", "carico", "carichi");
    }

}