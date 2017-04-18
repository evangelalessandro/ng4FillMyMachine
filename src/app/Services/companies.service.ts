import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../company-list/company-list.component';

import 'rxjs/add/operator/map'

const urlSite = 'http://demo8429465.mockable.io';


@Injectable()
export class CompaniesService {
    constructor(private http: Http) {
        console.log('http service initialized');

    }
    ///https://www.mockable.io/a/#/space/demo8429465/rest/UBIXgAAAA?inwizzard=true
    ///http://demo8429465.mockable.io/companies
    public getCompanies(): Observable<any> {

        /*{
              "companies":
                [
                  { "id": "1001", "name": "company A" },
                  { "id": "1002", "name": "company b" },
                  { "id": "1003", "name": "company c" },
                  { "id": "1004", "name": "company d" }
                ]
        }*/

        let url = urlSite + '/companies';
        console.log(url);

        return this.http.get(url)
            .map(response => {
                return ((response.json()) );
            });
    }

    public delete(id: string): Observable<Response> {
        return this.http
            .delete(`http://dbapi.io/db/coll/${id}`);
    }
}

/*
////http://cloudmark.github.io/Json-Mapping/
export default class MapUtils {
    static isPrimitive(obj) {
        switch (typeof obj) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }
        return !!(obj instanceof String || obj === String ||
        obj instanceof Number || obj === Number ||
        obj instanceof Boolean || obj === Boolean);
    }

    static isArray(object) {
        if (object === Array) {
            return true;
        } else if (typeof Array.isArray === "function") {
            return Array.isArray(object);
        }
        else {
            return !!(object instanceof Array);
        }
    }

    static deserialize<T>(clazz:{new(): T}, jsonObject) {
        if ((clazz === undefined) || (jsonObject === undefined)) return undefined;
        let obj = new clazz();
        Object.keys(obj).forEach((key) => {
            let propertyMetadataFn:(IJsonMetaData) => any = (propertyMetadata)=> {
                let propertyName = propertyMetadata.name || key;
                let innerJson = jsonObject ? jsonObject[propertyName] : undefined;
                let clazz = getClazz(obj, key);
                if (MapUtils.isArray(clazz)) {
                    let metadata = getJsonProperty(obj, key);
                    if (metadata.clazz || MapUtils.isPrimitive(clazz)) {
                        if (innerJson && MapUtils.isArray(innerJson)) {
                            return innerJson.map(
                                (item)=> MapUtils.deserialize(metadata.clazz, item)
                            );
                        } else {
                            return undefined;
                        }
                    } else {
                        return innerJson;
                    }

                } else if (!MapUtils.isPrimitive(clazz)) {
                    return MapUtils.deserialize(clazz, innerJson);
                } else {
                    return jsonObject ? jsonObject[propertyName] : undefined;
                }
            };

            let propertyMetadata = getJsonProperty(obj, key);
            if (propertyMetadata) {
                obj[key] = propertyMetadataFn(propertyMetadata);
            } else {
                if (jsonObject && jsonObject[key] !== undefined) {
                    obj[key] = jsonObject[key];
                }
            }
        });
        return obj;
    }
}

export interface IJsonMetaData<T> {
    name?: string,
    clazz?: {new(): T}
}
const jsonMetadataKey = "jsonProperty";
export function JsonProperty<T>(metadata?:IJsonMetaData<T>|string): any {
    if (metadata instanceof String || typeof metadata === "string"){
        return Reflect.metadata(jsonMetadataKey, {
            name: metadata,
            clazz: undefined
        });
    } else {
        let metadataObj = <IJsonMetaData<T>>metadata;
        return Reflect.metadata(jsonMetadataKey, {
            name: metadataObj ? metadataObj.name : undefined,
            clazz: metadataObj ? metadataObj.clazz : undefined
        });
    }
}
*/