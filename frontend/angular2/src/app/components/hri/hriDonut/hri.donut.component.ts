/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {indicators} from "../hri.data";

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

    @ViewChild("donut") canvasDonut: ElementRef;

    constructor() {
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

        //this.textInMiddle();
    }

    private textInMiddle() {
        let ctx = this.canvasDonut.nativeElement.getContext("2d");
        console.log(ctx);
        var width = this.canvasDonut.nativeElement.clientWidth,
            height = this.canvasDonut.nativeElement.clientHeight;

        var fontSize = (height / 250).toFixed(2);
        ctx.canvas.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "blue";

        var text = "Pass Rate 82%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height -10;

        ctx.fillText(text, textX, textY);
        ctx.restore();
    }

    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }


}