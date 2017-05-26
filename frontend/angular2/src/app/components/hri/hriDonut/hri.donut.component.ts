/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, ElementRef, OnInit, ViewChild, OnChanges, Input} from "@angular/core";
import {indicators, years} from "../hri.data";
import * as d3Hierarchy from "d3-hierarchy";
import * as d3Scale from "d3-scale";
import * as d3Selection from "d3-selection";
import * as d3Shape from "d3-shape";
import * as d3Path from "d3-path";
import {HriService} from "../../../shared/services/hri.service";
import {BaseChartDirective} from "ng2-charts";

@Component({
    selector: 'hri-donut',
    template: require('./hri.donut.component.html'),
    styles: [require('!style!css!sass!../../../../assets/css/partial/hri.scss').toString()]
})
export class HRIDonutComponent implements OnInit, OnChanges {

    @Input() district;
    @Input() indicator;
    @Input() scores;
    @Input() year;
    @Input("indicators") indicators;

    public lineChartLegend: boolean = false;
    public lineChartType: string = "line";
    public lineChartData;
    public lineChartLabels = [];
    public lineChartColors;
    public lineChartOptions: any;

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

    colors: any;

    targetIndicators: any;
    selectedTargetIndicator: any;

    constructor(private hriService: HriService) {
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(68, 157, 68, 0.2)',
                borderColor: 'rgba(68, 157, 68, 1)',
                pointBackgroundColor: 'rgba(68, 157, 68, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(68, 157, 68, 0.8)'
            }
        ];

        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        // min: 0,
                        // max: 100,
                        fontSize: 14
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 16
                }
            }
        }
    }

    ngOnInit() {

        let ids = this.indicators.filter(i => i.parentId == 0).map(i => i.id);
        this.targetIndicators = this.indicators.filter(i => i.parentId == 0);
        this.targetIndicators.forEach((ti, ind) => {
            if (ti.id == this.indicator.parentId) {
                this.selectedTargetIndicator = ti;
                this.selectedTargetIndicator.target = ind + 1;
            }
        });

        this.colors = [{
            id: ids[0],
            color: 'rgb(229, 36, 59)'
        }, {
            id: ids[1],
            color: 'rgb(0, 104, 157)'
        }, {
            id: ids[2],
            color: 'rgb(75, 159, 56)'
        }, {
            id: ids[3],
            color: 'rgb(229, 183, 53)'
        }, {
            id: ids[4],
            color: 'rgb(38, 189, 226)'
        }];

        this.mapDonutData(this.scores.filter(s => s.districtId == this.district.id)).then(data => {
            this.data = data;
            this.clearSvg();
            this.initSvg();
            this.draw();
        });

        this.mapLineChartData(this.scores.filter(s => s.districtId == this.district.id && s.indicatorId == this.indicator.id)).then((resp: any) => {
            this.lineChartData = resp.data;
            this.lineChartLabels = resp.labels;
        });
    }

    mapDonutData(scores) : Promise<any> {
        return new Promise((resolve, reject) => {
            let data = [];
            scores.forEach((s, ind) => {
                let parentId = this.indicators.find(i => i.id == s.indicatorId).parentId;
                if (parentId != 0) {
                    let d = {
                        width: 0.5,
                        color: this.colors.find(c => c.id == parentId).color,
                        score: s.valueByYear[this.year].score,
                        label: this.indicators.find(i =>  i.id == s.indicatorId).name,
                        id: s.id
                    };
                    data.push(d);
                }

                if (ind == scores.length - 1) resolve(data);
            });
        })
    }

    mapLineChartData(scores) {
        return new Promise((resolve, reject) => {
            let lineChartData = [];
            let lineChartLabels = [];

            let line = {
                data: [],
                label: this.indicator.name
            };

            if (scores.length > 0) {
                for (let property in scores[0].valueByYear) {
                    if (scores[0].valueByYear.hasOwnProperty(property)) {
                        line.data.push(scores[0].valueByYear[property].value);
                        lineChartLabels.push(property);
                    }
                }
                lineChartData.push(line);
                resolve({
                    data: lineChartData,
                    labels: lineChartLabels
                });
            }
        });
    }

    ngOnChanges(changes) {
        if (this.hriService.isChange()) {
            this.mapDonutData(this.scores.filter(s => s.districtId == this.district.id)).then(data => {
                this.data = data;
                this.clearSvg();
                this.initSvg();
                this.draw();
            });

            this.mapLineChartData(this.scores.filter(s => s.districtId == this.district.id && s.indicatorId == this.indicator.id)).then((resp: any) => {
                this.lineChartData = resp.data;
                this.lineChartLabels = resp.labels;
            });

            this.targetIndicators = this.indicators.filter(i => i.parentId == 0);
            this.targetIndicators.forEach((ti, ind) => {
                if (ti.id == this.indicator.parentId) {
                    this.selectedTargetIndicator = ti;
                    this.selectedTargetIndicator.target = ind + 1;
                }
            });
        }
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal(d3Scale.schemeCategory20c);
        this.width = 650;
        this.height = 650;
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

        // Define the div for the tooltip
        let tooltip = d3Selection.select("#asterChart").append("div")
            .attr("class", "tooltip")
            .style("visibility", "hidden");

        let path = this.svg.selectAll(".solidArc")
            .data(this.pie(this.data))
            .enter().append("path")
            .attr("fill", (d: any) => d.data.color)
            .attr("class", "solidArc")
            .attr("stroke", "gray")
            .attr("d", this.arc)
            .on("mouseover", (d: any) => {
                console.log(d);
                return tooltip.style("visibility", "visible")
                    .text(d.data.label + ": " + d.data.score)
                    .attr("dy", "1.5em")
                    .style("opacity", "1");
            })
            .on("mouseout", (d: any) => {
                return tooltip.style("visibility", "hidden");
            });

        let outerPath = this.svg.selectAll(".outlineArc")
            .data(this.pie(this.data))
            .enter().append("path")
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("class", "outlineArc")
            .attr("d", this.outlineArc);

        let g = this.svg.append("g")
            .attr("class", "aster-score")
            .attr("text-anchor", "middle");

        g.append("text")
            .attr("dy", "-1.1em") // text-align: right
            .text("Индекс")
            .attr("font-size", 26);

        g.append("text")
            .attr("dy" , ".2em")
            .text("здоровья:")
            .attr("font-size", 26);

        g.append("text")
            .attr("dy" , "1.5em")
            .text("85")
            .attr("font-size", 40)
            .attr("font-weight", "bold");

    }

    public chartDonutClicked(e:any):void {
    }

    public chartDonutHovered(e:any):void {
    }

    public chartLineClicked(e:any):void {
    }

    public chartLineHovered(e:any):void {
    }
}