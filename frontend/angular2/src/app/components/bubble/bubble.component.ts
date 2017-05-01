import {Component, OnInit, OnDestroy} from "@angular/core";
import {DataService} from "../../shared/services/data.service";
import {D3ComponentInterface} from "../../shared/interface/d3.interface";
import {Utils} from "../../shared/utils/utils";
import * as d3 from "d3";
import * as d3Scale from "d3-scale";
import * as d3Hierarchy from "d3-hierarchy";
import * as d3Selection from "d3-selection";

@Component({
    selector: 'bubble-comp',
    template: require("./bubble.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/bubble.scss').toString()]
})

export class BubbleComponent implements OnInit, D3ComponentInterface, OnDestroy {

    margin = {top: 20, bottom: 20, right: 20, left: 20};
    width: number;
    height: number;
    color: any;
    svg: any;

    public data = [];
    public namesProperty: Array<string> = [];
    public filter: string;
    public mappingData: Array<any> = [];

    private subscription;
    private diameter: number = 800;

    constructor(private dataService: DataService) {
        this.width = 800 - this.margin.right - this.margin.left;
        this.height = 800 - this.margin.top - this.margin.bottom;
    }

    ngOnInit(): void {
        this.subscription = this.dataService.getContentDataFileAsJson().subscribe(content => {
            this.data = content;
            this.namesProperty = Utils.getNamesProperty(this.data[0]);
            this.filter = this.namesProperty[0];
            this.mappingData = Utils.mapData(this.data, this.filter);
            this.refreshSvg();
        });
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20c);

        this.svg = d3Selection.select("#bubbleChart")
            .append("svg")
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g");
    }

    clearSvg() {
        d3Selection.select("#bubbleChart").select("svg").remove();
    }

    draw() {
        let bubble = d3Hierarchy.pack()
            .size([this.diameter - this.margin.right, this.diameter - this.margin.left])
            .padding(10);

        let root = d3Hierarchy.hierarchy({name: "bubble", children: this.mappingData})
            .sum((d: any) =>  d.size);

        bubble(root);

        let node = this.svg.selectAll(".node")
            .data(root.children)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", (d: any) => "translate(" + d.x + "," + d.y + ")");

        let circle = node.append("circle")
            .attr("r", (d: any) =>  d.r)
            .style("fill", (d: any, i) => this.color(this.mappingData[i].name));

        circle.on("mouseover", this.updateLegend)
            .on("mouseout", this.removeLegend);

    }

    refreshSvg() {
        this.mappingData = Utils.mapData(this.data, this.filter);
        this.clearSvg();
        this.initSvg();
        this.draw();
    }

    onChangeFilter() {
        this.refreshSvg();
    }

    updateLegend(d) {
        d3Selection.select("#bubble_legend")
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
