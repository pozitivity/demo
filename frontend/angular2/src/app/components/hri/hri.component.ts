/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, Renderer2, ElementRef} from "@angular/core";
import {districts, indicators, years} from "./hri.data";
import {HriService} from "../../shared/services/hri.service";

@Component({
    selector: 'hri-comp',
    template: require('./hri.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/hri.scss').toString()]
})
export class HRIComponent {
    public mode = "district";

    public selectedDistrict;
    public selectedIndicator;

    public districts;
    public indicators;
    public years;
    public year: number = 2015;
    public scores;

    constructor(private hriService: HriService,
                private renderer: Renderer2,
                private el: ElementRef) {

    }

    ngOnInit() {
        this.hriService.getDistricts().subscribe(districts => {
            this.districts = districts;
            this.selectedDistrict = this.districts[0];
        });

        this.hriService.getIndicators().subscribe(indicators => {
            this.indicators = indicators;
            this.selectedIndicator = this.indicators[0];
        });

        this.hriService.getScores().subscribe(scores => {
            this.scores = scores;
        });
    }

    public isChild(indicator) {
        if (indicator.parentId == 0 || indicator.parentId == null) return false;
        return true;
    }

    public changeMode(mode) {
        this.mode = mode;
    }

    public changeYear(event) {
        console.log(event);
    }

    public toggleDropdownDistrict(district) {
        this.selectedDistrict = district;
        this.hriService.setChange(true);
    }

    public toggleDropdownIndicator(indicator) {
        this.selectedIndicator = indicator;
        this.hriService.setChange(true);
    }
}