/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component} from "@angular/core";
import {districts, indicators, years} from "./hri.data";

@Component({
    selector: 'hri-comp',
    template: require('./hri.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/hri.scss').toString()]
})
export class HRIComponent {
    public mode = "map";

    public selectedDistrict = districts[0].name;
    public selectedIndicator = indicators[0].name;

    public districts;
    public indicators;
    public years;
    public range: number = 1990;

    constructor() {
        this.districts = districts;
        this.indicators = indicators;
        this.years = years;
    }

    public changeMode(mode) {
        this.mode = mode;
    }

    public changeYear(event) {
        console.log(event);
    }
}