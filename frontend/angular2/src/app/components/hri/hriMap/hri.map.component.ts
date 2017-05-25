/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, OnInit, ElementRef, ViewChild, Input, OnChanges} from "@angular/core";
import {HriService} from "../../../shared/services/hri.service";

@Component({
    selector: 'hri-map',
    template: require('./hri.map.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIMapComponent implements OnInit, OnChanges {

    @Input() indicator;
    @Input() scores;
    @Input() year;

    public lat: number;
    public lng: number;

    @ViewChild("map") mapElementRef: ElementRef;

    constructor(private hriService: HriService) {
    }

    ngOnInit() {

        this.lat = 61.52401;
        this.lng = 105.318756;
    }

    ngOnChanges(changes) {
        if (this.hriService.isChange()) {
            console.log(this.indicator);
            console.log(this.scores);
            console.log(this.year);
        }
    }
}