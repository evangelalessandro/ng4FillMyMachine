import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { baseModel } from '../../Models/baseModel';
import { baseService } from '../../Services/base.service';
import { ReflectiveInjector } from '@angular/core';

import { AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

 
export class masterDetail_DetailComponent<T > implements OnInit {
    @Input() item: T;

    //eventi di creazione modifica e annullamento
    ////
    ///http://plnkr.co/edit/v3vmZkOK4fxDXsrziqHx?p=preview
    @Output() itemCreated = new EventEmitter<T>();
    @Output() itemUpdated = new EventEmitter<T>();
    @Output() undoSelect = new EventEmitter();

    logMessage: string;

    constructor(private baseService: any) { }

    ngOnInit() { }



    myForm: NgForm;
    @ViewChild('heroForm') currentForm: NgForm;

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.myForm) { return; }
        this.myForm = this.currentForm;
        if (this.myForm) {
            this.myForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.myForm) { return; }
        const form = this.myForm.form;

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
            'minlength': 'Name must be at least 3 characters long.',
            'maxlength': 'Name cannot be more than 50 characters long.',
            'forbiddenName': 'Some name cannot be a name of a company.'
        },
        'email': {
            'required': 'Email is required.',
            'pattern': 'Please input a valid email.'
        }
    };
    annulla() {
        this.undoSelect.emit();
    }

    save(item) {
        if (item._id) {
            this.logMessage = JSON.stringify(this.item);

            this.baseService.update(item).subscribe(data => {
                this.logMessage = "post update item" + JSON.stringify(data);
                item.updateDate = data.updateDate;

                this.itemUpdated.emit(item);

            });
        }
        else {
            this.add();
        }
    }
    ///modalità nuovo
    add() {
        this.logMessage = "add item" + JSON.stringify(this.item);

        this.baseService.add(this.item)
            .subscribe(item => {

                this.item = item;

                this.itemCreated.emit(item);
            });
    }
}
