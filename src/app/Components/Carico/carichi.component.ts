import { Component, OnInit } from '@angular/core';
import {carico} from '../../Models/carico'
import { carichiService } from '../../Services/carichi.service';

@Component({
    selector: 'carichiList',
    templateUrl: './carichi.component.html',
    styleUrls: ['./carichi.component.css']
})
export class CarichiComponent implements OnInit {
    carichi:carico[] 
    logMessage: string;
    modeNew: boolean;
    selectedCarico: carico;

    constructor(private carichiService: carichiService) {
        this.carichiService.getall()
            .subscribe(items => {
                this.carichi = items;
                this.logMessage = JSON.stringify(items);

            });
        this.modeNew = false;
    }


    ngOnInit() { }
    
    addNew() {
        this.logMessage = "log vuoto";

        this.modeNew = true;
        var i = 0;
        this.carichi.forEach(element => {
            i++;
            if (element._id) {
                //ne aggiungo al massimo uno
                this.carichi.splice(i, 1);
            }
        });
        this.selectedCarico = new carico();
        this.carichi.push(this.selectedCarico);

    }

    onSelect(item: carico): void {
        ///https://angular.io/docs/ts/latest/tutorial/toh-pt2.html esempio seleect element
        this.selectedCarico = item;
        this.logMessage = JSON.stringify(item);
        this.modeNew = false;
    } 
    
    delete(item) {
        var carichi = this.carichi;
        console.log("Pre delete ", item._id);

        this.carichiService.delete(item._id).subscribe(data => {
            console.log("Delete post chiamata servizio ", data);
            //se trovato rimuovo
            if (data.n == 1) {
                for (var i = 0; i < carichi.length; i++) {
                    if (carichi[i]._id == item._id) {
                        carichi.splice(i, 1);
                    }
                }
            }
        });
    }
}