/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {DataService} from "../../shared/services/data.service";
import {D3ComponentInterface} from "../../shared/interface/d3.interface";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import {Utils} from "../../shared/utils/utils";

@Component({
    selector: 'barchart-comp',
    template: require("./barchart.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/barchart.scss').toString()]
})
export class BarchartComponent implements OnInit, OnDestroy, D3ComponentInterface {

    private subscription;
    private mappingData: Array<any> = [];
    private data = [];
    private g: any;
    private x: any;
    private y: any;

    margin = { top: 20, bottom: 20, right: 20, left: 20 };
    width: number;
    height: number;
    color: any;
    svg: any;

    public namesProperty: Array<any> = [];
    public filter: string;
    public type: string;

    constructor(private dataService: DataService) {
        this.width = 3000 - this.margin.right - this.margin.left;
        this.height = 760 - this.margin.top - this.margin.bottom;

    }

    ngOnInit() : void {
        this.subscription = this.dataService.getContentDataFileAsJson().subscribe(content => {
            this.data = content;
            this.namesProperty = Utils.getNamesProperty(this.data[0]);
            this.filter = this.namesProperty[0].name;
            this.type = this.namesProperty[0].type;
            this.refreshSvg();
        });
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20);

        this.svg = d3Selection.select("#barChart")
            .append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom);

        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.right * 2.5 + "," + this.margin.left + ")");
    }

    initAxis() {
        this.x = d3Scale.scaleBand()
            .rangeRound([0, this.width])
            .padding(0.1);

        this.y = d3Scale.scaleLinear()
            .rangeRound([this.height, 0]);

        this.x.domain(this.mappingData.map((d: any) => d.name));
        this.y.domain([0, d3Array.max(this.mappingData, (d: any) => d.size)]);
    }

    drawAxis() {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));

        this.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y).ticks(10, "s"))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "1em")
            .attr("text-anchor", "end")
            .text("count");
    }

    draw() {
        let rect = this.g.selectAll(".bar")
            .data(this.mappingData)
            .enter().append("rect")
            .attr("class", "bar")
            .style("fill", (d, i) => this.color(this.mappingData[i].name))
            .attr("x", (d) => this.x(d.name))
            .attr("y", (d) => this.y(d.size))
            .attr("width", this.x.bandwidth())
            .attr("height", (d) => this.height - this.y(d.size));

        rect.on("mouseover", this.updateLegend)
            .on("mouseout", this.removeLegend)
    }

    updateLegend(d) {
        d3Selection.select("#bar_legend")
            .html("<h2>" + d.name + "</h2><p>" + d.size + "</p>")
            .transition()
            .duration(200)
            .style("opacity", "1");
    }

    removeLegend() {
        d3Selection.select("#bar_legend")
            .transition()
            .duration(1000)
            .style("opacity", "0");
    }

    clearSvg() {
        d3Selection.select("#barChart").select("svg").remove();
    }

    refreshSvg() {
        this.mappingData = this.mapData(this.data, this.filter);
        this.type = this.namesProperty.find(np => np.name == this.filter);
        this.clearSvg();
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.draw();
    }

    mapData(data: Array<any>, filter: string) : Array<any> {
        let mappingData = Utils.mapData(data, filter);
        let max: number = Number.MIN_VALUE;
        for (let i = 0; i < mappingData.length; i++) {
            if (mappingData[i].size > max) max = mappingData[i].size;
        }
        return mappingData.map(md => {
            return {
                name: md.name,
                frequency: md.size / max,
                size: md.size
            }
        });
    }

    onChangeFilter() {
        this.refreshSvg();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}