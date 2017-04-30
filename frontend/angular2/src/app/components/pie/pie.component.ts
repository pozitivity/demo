/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'pie-comp',
    template: require("./pie.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/pie.scss').toString()]
})
export class PieComponent {
    constructor() {
        console.log('init');
    }
}