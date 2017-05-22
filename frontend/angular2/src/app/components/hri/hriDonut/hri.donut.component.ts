/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {indicators, years, lineChartData, data} from "../hri.data";
import * as d3Hierarchy from "d3-hierarchy";
import * as d3Scale from "d3-scale";
import * as d3Selection from "d3-selection";
import * as d3Shape from "d3-shape";
import * as d3Path from "d3-path";

@Component({
    selector: 'hri-donut',
    template: require('./hri.donut.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIDonutComponent implements OnInit {

    public lineChartLegend: boolean = true;
    public lineChartType: string = "line";
    public lineChartData;
    public lineChartLabels;
    public lineChartColors;

    // d3
    color: any;
    width: number;
    height: number;
    svg: any;
    pie: any;
    tip: any;
    arc: any;
    outlineArc: any;
    radius: number;
    innerRadius: number;
    data: any;

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

        this.clearSvg();
        this.initSvg();
        this.draw();
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20c);
        this.width = 600;
        this.height = 600;
        this.radius = Math.min(this.width, this.height)/2;
        this.innerRadius = 0.3 * this.radius;

        this.svg = d3Selection.select("#asterChart")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");;
    }

    clearSvg() {
        d3Selection.select("#asterChart").select("svg").remove();
    }

    draw() {
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.width);

        this.arc = d3Shape.arc()
            .innerRadius(this.innerRadius)
            .outerRadius((d: any) => { return (this.radius - this.innerRadius) * (d.data.score / 100) + this.innerRadius });

        this.outlineArc = d3Shape.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.radius);

        let path = this.svg.selectAll(".solidArc")
            .data(this.pie(data))
            .enter().append("path")
            .attr("fill", (d: any) => {console.log(d); return d.data.color})
            .attr("class", "solidArc")
            .attr("stroke", "gray")
            .attr("d", this.arc);
            //.on("mouseover")
            //.on("mouseout")

        let outerPath = this.svg.selectAll(".outlineArc")
            .data(this.pie(data))
            .enter().append("path")
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("class", "outlineArc")
            .attr("d", this.outlineArc);

        this.svg.append("svg:text")
            .attr("class", "aster-score")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle") // text-align: right
            .text("Индекс здоровья: " + 85);

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