import {baseModel } from './baseModel';

export class Company implements baseModel{
    _id: any;

    name: string;
    note: string;
    mobile1: string;
    mobile2: string;
    email: string;    

    creationDate: Date;
    updateDate: Date;
}
