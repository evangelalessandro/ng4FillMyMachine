import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


export class baseService {

    name: string = "";
    serverApi: string = "http://localhost:3000/api";
    serverApiAdd: string = "http://localhost:3000/api/pallet";
    serverApiSingle: string = "http://localhost:3000/api/pallet/";
    serverApiAll: string = "http://localhost:3000/api/pallets/";

    constructor(private http: Http) {
    }


    public setSetting(nameClass, serverapi, item, getall) {
        this.serverApi = serverapi;
        this.serverApiAdd = this.serverApi + "/" + item;
        this.serverApiSingle = this.serverApi + "/" + item + "/";
        this.serverApiAll = this.serverApi + "/" + getall;


        console.log(nameClass + 'Service Initialized...');

    }

    public getall() {
        return this.http.get(this.serverApiAll)
            .map(res => {
                console.log(this.name + ' get all ');

                return res.json()
            });
    }

    public add(newItem) {
        console.log(this.name + ' add ');

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(this.name + ' add ', newItem, this.serverApiAdd, JSON.stringify(newItem));

        return this.http.post(this.serverApiAdd, JSON.stringify(newItem), { headers: headers })
            .map(res => res.json());
    }
    public delete(id) {
        console.log(this.name + ' delete ' + id);
        return this.http.delete(this.serverApiSingle + id)
            .map(res => res.json());
    }

    public update(item) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log(this.name + ' update pre PUT ', item, this.serverApiSingle, JSON.stringify(item));


        return this.http.put(this.serverApiSingle + item._id, JSON.stringify(item),
            { headers: headers })
            .map(res => res.json());
    }
}
