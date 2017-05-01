/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component} from "@angular/core";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'pie-comp',
    template: require("./pie.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/pie.scss').toString()]
})
export class PieComponent {

    subscription;
    data = [];

    constructor(private dataService: DataService) {
         // this.subscription = this.dataService
         //     .getContentDataFileAsJson()
    }
}