import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { baseService} from './base.service';

import 'rxjs/add/operator/map';

@Injectable()
export class tipiCamionService extends baseService {
 
    constructor(private httpObject: Http) {
        super(httpObject);
        
         super.setSetting("tipicamion",
             "http://localhost:3000/api", "tipocamion", "tipicamion");
    }

}