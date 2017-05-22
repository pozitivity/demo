/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Directive} from "@angular/core";

@Component({
    selector: 'hri-map',
    template: require('./hri.map.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIMapComponent implements OnInit {

    public lat: number;
    public lng: number;

    @ViewChild("map") mapElementRef: ElementRef;

    constructor() {
    }

    ngOnInit() {
        this.lat = 61.52401;
        this.lng = 105.318756;
    }
}