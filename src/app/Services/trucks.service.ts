import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class TrucksService {
   private   urlSiteApi = 'http://demo8429465.mockable.io';

  constructor(private http: Http) {
    console.log('http service initialized');

  }

  ///https://www.mockable.io/a/#/space/demo8429465/rest/UBIXgAAAA?inwizzard=true
  ///http://demo8429465.mockable.io/companies
  public get(): Observable<any> {

    /*{
          "companies":
            [
              { "id": "1001", "name": "company A" },
              { "id": "1002", "name": "company b" },
              { "id": "1003", "name": "company c" },
              { "id": "1004", "name": "company d" }
            ]
    }*/

    let url = this.urlSiteApi + '/companies';

    return this.http.get(url)
      .map(response => response.json());
  }

  public delete(id: string): Observable<Response> {
    return this.http
      .delete(`http://dbapi.io/db/coll/${id}`);
  }
}

