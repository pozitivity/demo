/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {indicators, years, lineChartData} from "../hri.data";

@Component({
    selector: 'hri-donut',
    template: require('./hri.donut.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIDonutComponent implements OnInit {

    public donutChartLabels: string[] = [];
    public donutChartData: number[] = [];
    public donutChartType: string = 'doughnut';
    public donutChartColors: any = [{
        backgroundColor: []
    }];
    private color: string[];

    public lineChartLegend: boolean = true;
    public lineChartType: string = "line";
    public lineChartData;
    public lineChartLabels;
    public lineChartColors;

    @ViewChild("donut") canvasDonut: ElementRef;

    constructor() {
        this.lineChartData = lineChartData;
        this.lineChartLabels = years;
        this.lineChartColors = [
            { // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ]
    }

    ngOnInit() {
        this.color = ["#736cf0", "#f06ca7", "#6cf0b5", "#ebf711", "#f78c11"];
        this.donutChartColors[0].backgroundColor = [];
        indicators.forEach((ind, index) => {
            let color = this.color[index];
            this.donutChartColors[0].backgroundColor.push(color);
            this.donutChartLabels.push(ind.name);
            this.donutChartData.push(1);
            ind.childs.forEach(ch => {
                this.donutChartLabels.push(ch.name);
                this.donutChartColors[0].backgroundColor.push(color);
                this.donutChartData.push(1);
            });
        });
    }

    public chartDonutClicked(e:any):void {
        console.log(e);
    }

    public chartDonutHovered(e:any):void {
        console.log(e);
    }

    public chartLineClicked(e:any):void {
        console.log(e);
    }

    public chartLineHovered(e:any):void {
        console.log(e);
    }
}