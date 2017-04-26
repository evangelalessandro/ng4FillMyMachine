import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
    serverApi: string = "http://localhost:3000/api";
    serverApiAdd: string = "http://localhost:3000/api/company";
    serverApiSingle: string = "http://localhost:3000/api/company/";

    constructor(private http: Http) {
        console.log('Companies Service Initialized...');
    }

    getall() {
        return this.http.get(this.serverApi + '/companies')
            .map(res => {
                console.log('Companies get all ');

                return res.json()
            });
    }

    add(newItem) {
        console.log('Companies add service call');

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log('Companies add ', newItem, this.serverApiAdd, JSON.stringify(newItem));

        return this.http.post(this.serverApiAdd, JSON.stringify(newItem), { headers: headers })
            .map(res => res.json());
    }
    delete(id) {

        return this.http.delete(this.serverApiSingle   + id)
            .map(res => res.json());
    }

    update(item) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log('Companies update pre PUT ', item, this.serverApiSingle, JSON.stringify(item));

        
        return this.http.put(this.serverApiSingle + item._id, JSON.stringify(item),
            { headers: headers })
            .map(res => res.json());
    }


}
