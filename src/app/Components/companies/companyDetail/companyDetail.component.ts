import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../Models/Company';
import { CompanyService } from '../../../Services/companies.service';
import { ReflectiveInjector } from '@angular/core';
import { OpaqueToken } from '@angular/core';
import { AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { masterDetail_DetailComponent } from '../../Base/masterDetail_DetailComponent'

@Component({
    selector: 'companydetail',
    templateUrl: './companyDetail.component.html',
    styleUrls: ['./companyDetail.component.css']
})
export class CompanyDetail extends masterDetail_DetailComponent<Company> {
 
    constructor() {
        super();
     }
    
    formErrors = {
        'name': '',
        'email': ''
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 3 characters long.',
            'maxlength': 'Name cannot be more than 50 characters long.',
            'forbiddenName': 'Some name cannot be a name of a company.'
        },
        'email': {
            'required': 'Email is required.',
            'pattern': 'Please input a valid email.'
        }
    };
     
}
