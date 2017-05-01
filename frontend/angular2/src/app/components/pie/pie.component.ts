/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {DataService} from "../../services/data.service";
import * as d3 from "d3";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Zoom from "d3-zoom";
import {TranslateService} from "@ngx-translate/core";

export const Stats: any[] = [
    {age: "<5", population: 2704659},
    {age: "5-13", population: 4499890},
    {age: "14-17", population: 2159981},
    {age: "18-24", population: 3853788},
    {age: "25-44", population: 14106543},
    {age: "45-64", population: 8819342},
    {age: "≥65", population: 612463}
];

@Component({
    selector: 'pie-comp',
    template: require("./pie.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/pie.scss').toString()]
})
export class PieComponent implements OnDestroy {

    private subscription;
    public data = [];
    public namesProperty: string[] = [];
    private filter: string;
    public mappingData = [];

    private margin = { top: 20, right: 20, bottom: 20, left: 50 };
    private width: number;
    private height: number;
    private radius: number;

    private arc: any;
    private labelArc: any;
    private pie: any;
    private color: any;
    private svg: any;
    private zoom: any;
    private container: any;

    constructor(private dataService: DataService,
                private translate: TranslateService) {
        this.subscription = this.dataService.getContentDataFileAsJson().subscribe(content => {
            this.data = content;
            this.getNamesProperty(this.data[0]);
            this.refreshSvg();
        });
        this.width = 1000 - this.margin.left - this.margin.right;
        this.height = 800 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
        this.svg = d3Selection.select("svg");
    }

    getNamesProperty(obj: any) {
        for (let name in obj) {
            this.namesProperty.push(name);
        }
        this.filter = this.namesProperty[0];
    }

    onChangeFilter(newFilter) {
        this.refreshSvg();
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20c);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        // this.labelArc = d3Shape.arc()
        //      .outerRadius(this.radius - 40)
        //      .innerRadius(this.radius - 40);
        this.zoom = d3Zoom.zoom()
            .scaleExtent([1, Infinity])
            .on("zoom", this.zoomed);

        this.pie = d3Shape.pie()
            .sort(null)
            .value((d:any) => d.size);

        this.svg = d3Selection.select("#pieChart")
            .append("svg")
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom);


        this.container = this.svg.append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")")
            //.call(this.zoom);
    }

    clearSvg() {
        d3Selection.select("#pieChart").select("svg").remove();
    }

    drawPie() {
        let g = this.container.selectAll(".arc")
            .data(this.pie(this.mappingData))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .attr("fill", (d:any, i) => this.color(this.mappingData[i].name));

        g.on("mouseover", this.updateLegend)
            .on("mouseout", this.removeLegend);
    }

    updateLegend(d) {
        d3Selection.select("#pie_legend")
            .html("<h2>" + d.data.name + "</h2><p>" + d.data.size + "</p>")
            .transition()
            .duration(200)
            .style("opacity", "1");
    }

    removeLegend(d) {
        d3Selection.select("#pie_legend")
            .transition()
            .duration(1000)
            .style("opacity", "0");
    }

    mapData() {
        this.mappingData = [];
        let result = this.data.reduce((previous, current, index, array) => {
            previous[current[this.filter]] = previous[current[this.filter]] || [];
            previous[current[this.filter]].push(current);
            return previous;
        }, Object.create(null));
        for (let name in result) {
            this.mappingData.push({ name: name, size: result[name].length});
        }
    }

    refreshSvg() {
        this.mapData();
        this.clearSvg();
        this.initSvg();
        this.drawPie();
    }

    zoomed() {
        this.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}