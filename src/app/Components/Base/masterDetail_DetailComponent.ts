import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { baseModel } from '../../Models/baseModel';
import { baseService } from '../../Services/base.service';
import { ReflectiveInjector } from '@angular/core';

import { AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


export class masterDetail_DetailComponent<T> implements OnInit {
    @Input() protected item: T;

    //eventi di creazione modifica e annullamento
    ////
    ///http://plnkr.co/edit/v3vmZkOK4fxDXsrziqHx?p=preview
    @Output() itemCreated = new EventEmitter<T>();
    @Output() itemUpdated = new EventEmitter<T>();
    @Output() undoSelect = new EventEmitter();

    validationMessages: any;
    formErrors: any;
 
    logMessage: string;

    constructor() { }

    ngOnInit() { }



    myForm: NgForm;
    @ViewChild('myCurrentForm') currentForm: NgForm;

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

     
    annulla() {
        this.undoSelect.emit();
    }

    save(item) {
        if (item._id) {
            this.itemUpdated.emit(item);

        }
        else {
            this.add();
        }
        
    }
    ///modalità nuovo
    add() {        
        this.itemCreated.emit(this.item);

    }
}
