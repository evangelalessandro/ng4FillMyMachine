import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastServiceUtils {

    constructor(private toastyService: ToastyService,
        private toastyConfig: ToastyConfig) {

        console.log("ToastServiceUtils start");        
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'bootstrap';
    }

    addToast(type: enTastyType, titleMsg: string,
        message: string, timeoutMsg: number = 5000) {
        
        // Or create the instance of ToastOptions
        var toastOptions: ToastOptions = {
            title: titleMsg,
            msg: message,
            showClose: true,
            timeout: timeoutMsg,
            theme: 'bootstrap',

            onAdd: (toast: ToastData) => {
             //   console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast: ToastData) {
               // console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        switch (type) {
            case enTastyType.info: {
                this.toastyService.info(toastOptions);
                break;
            }
            case enTastyType.error: {
                this.toastyService.error(toastOptions);
                break;    
            }
            case enTastyType.success: {
                this.toastyService.success(toastOptions);
                break;    
            }
            case enTastyType.wait: {
                this.toastyService.wait(toastOptions);
                break;    
            }
            case enTastyType.warning: {
                this.toastyService.warning(toastOptions);
                break;    
            }

        }
    }
}

export enum enTastyType {
    info = 0,
    success = 1,
    error = 2,
    warning = 3,
    wait = 4
}