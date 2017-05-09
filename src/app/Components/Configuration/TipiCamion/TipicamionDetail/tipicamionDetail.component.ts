import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { tipicamionModel } from '../../../../Models/tipicamionModel';
import { tipiCamionService} from '../../../../Services/tipiCamion.service';
 import { AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { masterDetail_DetailComponent } from '../../../Base/masterDetail_DetailComponent'

@Component({
    selector: 'tipicamiondetail',
    templateUrl: './tipicamiondetail.component.html',
    styleUrls: ['./tipicamiondetail.component.css']
})
export class tipicamionDetailComponent extends masterDetail_DetailComponent<tipicamionModel> {
 
    constructor() {
        super();
     }
    
    formErrors = {
        'name': '',
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 3 characters long.',
            'maxlength': 'Name cannot be more than 50 characters long.',
            'forbiddenName': 'Some name cannot be a name of a company.'
        },
    };
     
}
