import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../Models/Company';
import { CompanyService } from '../../../Services/companies.service';
import { ReflectiveInjector } from '@angular/core';
import { OpaqueToken } from '@angular/core';
import {  AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'companydetail',
    templateUrl: './companyDetail.component.html',
    styleUrls: ['./companyDetail.component.css']
})
export class CompanyDetail implements OnInit {
    @Input() item: Company;

    //eventi di creazione modifica e annullamento
    ////
    ///http://plnkr.co/edit/v3vmZkOK4fxDXsrziqHx?p=preview
    @Output() itemCreated = new EventEmitter<Company>();
    @Output() itemUpdated = new EventEmitter<Company>();
    @Output() undoSelect = new EventEmitter();

    logMessage: string;

    constructor(private companyService: CompanyService) { }

    ngOnInit() { }



    heroForm: NgForm;
    @ViewChild('heroForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.heroForm) { return; }
        this.heroForm = this.currentForm;
        if (this.heroForm) {
            this.heroForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.heroForm) { return; }
        const form = this.heroForm.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    formErrors = {
        'name': '',
        'email': ''
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 50 characters long.',
            'forbiddenName': 'Some name cannot be a name of a company.'
        },
        'email': {
            'required': 'Email is required.',
            'pattern': 'Please input a valid email.'
        }
    };
    annulla()
    {
        this.undoSelect.emit();
    }

    save() {
        if (this.item._id) {
            this.logMessage = JSON.stringify(this.item);

            this.companyService.update(this.item).subscribe(data => {
                this.logMessage="post update item" + JSON.stringify( data);
                this.item.updateDate = data.updateDate;

                this.itemUpdated.emit(this.item);
                
            });
        }
        else {
            this.add();
        }
    }
    ///modalità nuovo
    add() {
        this.logMessage = "add item" + JSON.stringify(this.item);

        this.companyService.add(this.item)
            .subscribe(item => {

                this.item= item;

                this.itemCreated.emit(item);
            });
    }
}
