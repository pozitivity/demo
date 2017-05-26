/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, OnInit, ElementRef, ViewChild, Input, OnChanges} from "@angular/core";
import {HriService} from "../../../shared/services/hri.service";
import {colors} from "../hri.data";

@Component({
    selector: 'hri-map',
    template: require('./hri.map.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIMapComponent implements OnInit, OnChanges {

    @Input() indicator;
    @Input() scores;
    @Input() year;
    @Input() districts;

    public lat: number;
    public lng: number;

    public data: any;

    colors: any = colors;

    @ViewChild("map") mapElementRef: ElementRef;

    constructor(private hriService: HriService) {
    }

    ngOnInit() {
        this.lat = 61.52401;
        this.lng = 105.318756;


        this.data = this.scores.filter(s => s.indicatorId == this.indicator.id).map(s => {
            debugger;
            let score = s.valueByYear[this.year].score;
            let color = this.colors.find(c => score >= c.min && score < c.max);
            return {
                score: score,
                id: s.id,
                districtId: s.districtId,
                indicatorId: s.indicatorId,
                fillColor: color.fillColor,
                strokeColor: color.strokeColor
            };
        });
    }

    ngOnChanges(changes) {
        if (this.hriService.isChange()) {

            this.data = this.scores.filter(s => s.indicatorId == this.indicator.id).map(s => {
                let score = s.valueByYear[this.year].score;
                let color = this.colors.find(c => score >= c.min && score < c.max);
                return {
                    score: score,
                    id: s.id,
                    districtId: s.districtId,
                    indicatorId: s.indicatorId,
                    fillColor: color.fillColor,
                    strokeColor: color.strokeColor
                };
            });
        }
    }
}