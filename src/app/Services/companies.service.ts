import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { baseService } from './base.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService extends baseService {

    constructor(private httpObject: Http) {
        super(httpObject);

        super.setSetting("companies",
            "http://localhost:3000/api", "company", "companies");
    }

}
 