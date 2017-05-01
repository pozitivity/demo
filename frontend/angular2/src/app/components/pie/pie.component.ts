/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {DataService} from "../../shared/services/data.service";
import * as d3 from "d3";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Zoom from "d3-zoom";
import {Utils} from "../../shared/utils/utils";
import {D3ComponentInterface} from "../../shared/interface/d3.interface";

@Component({
    selector: 'pie-comp',
    template: require("./pie.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/pie.scss').toString()]
})
export class PieComponent implements OnDestroy, D3ComponentInterface, OnInit {

    private subscription;
    public data = [];
    public namesProperty: Array<string> = [];
    public filter: string;
    public mappingData: Array<any> = [];

    margin = { top: 20, right: 20, bottom: 20, left: 50 };
    width: number;
    height: number;
    color: any;
    svg: any;

    private radius: number;
    private arc: any;
    private pie: any;
    private zoom: any;
    private container: any;

    constructor(private dataService: DataService) {
        this.width = 800 - this.margin.left - this.margin.right;
        this.height = 800 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }

    ngOnInit() {
        this.subscription = this.dataService.getContentDataFileAsJson().subscribe(content => {
            this.data = content;
            this.namesProperty = Utils.getNamesProperty(this.data[0]);
            this.filter = this.namesProperty[0];
            this.mappingData = Utils.mapData(this.data, this.filter);
            this.refreshSvg();
        });
    }

    onChangeFilter(newFilter) {
        this.refreshSvg();
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20c);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);

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

    draw() {
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

    removeLegend() {
        d3Selection.select("#pie_legend")
            .transition()
            .duration(1000)
            .style("opacity", "0");
    }

    refreshSvg() {
        this.mappingData = Utils.mapData(this.data, this.filter);
        this.clearSvg();
        this.initSvg();
        this.draw();
    }

    zoomed() {
        this.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}