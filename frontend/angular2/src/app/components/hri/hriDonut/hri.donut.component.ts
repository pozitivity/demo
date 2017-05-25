/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, ElementRef, OnInit, ViewChild, OnChanges, Input} from "@angular/core";
import {indicators, years, lineChartData, data} from "../hri.data";
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

    public lineChartLegend: boolean = true;
    public lineChartType: string = "line";
    public lineChartData;
    public lineChartLabels = [];
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

    colors: any;

    @ViewChild(BaseChartDirective) baseChart;

    constructor(private hriService: HriService) {
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

        let ids = this.indicators.filter(i => i.parentId == 0).map(i => i.id);

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

        this.mapLineChartData(this.scores.filter(s => s.districtId == this.district.id && s.indicatorId == this.indicator.id)).then(data => {
            console.log(data);
            this.lineChartData = data;
            this.baseChart.ngOnChanges({
                datasets: {
                    currentValue: data,
                    previousValue: null,
                    firstChange: false,
                    isFirstChange: () => false
                }
            })
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
                        score: s.valueByYear[this.year],
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

            let line = {
                data: [],
                label: this.district.name
            };

            if (scores.length > 0) {
                for (let property in scores[0].valueByYear) {
                    if (scores[0].valueByYear.hasOwnProperty(property)) {
                        line.data.push(scores[0].valueByYear[property]);
                        this.lineChartLabels.push(property);
                    }
                }
                lineChartData.push(line);
                resolve(lineChartData);
                // scores[0].valueByYear.forEach((v, ind) => {
                //     line.data.push(v);
                //     this.lineChartLabels.push(ind);
                //
                //     if (ind == scores[0].valueByYear.length - 1) {
                //         lineChartData.push(line);
                //         resolve(lineChartData);
                //     }
                // });
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

            this.mapLineChartData(this.scores.filter(s => s.districtId == this.district.id && s.indicatorId == this.indicator.id)).then(data => {
                this.lineChartData = [];
                this.lineChartData = data;
            });
        }
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

        // let tip = d3Tip.attr('class', 'd3-tip')
        //     .offset([0, 0])
        //     .html(function(d) {
        //         return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
        //     });

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
        var div = d3Selection.select("#asterChart").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        let path = this.svg.selectAll(".solidArc")
            .data(this.pie(this.data))
            .enter().append("path")
            .attr("fill", (d: any) => d.data.color)
            .attr("class", "solidArc")
            .attr("stroke", "gray")
            .attr("d", this.arc)
            .on("mouseover", (d: any) => {
                console.log(d);
                // div
                //     .duration(200)
                //     .style("opacity", .9);
                div.html(d.data.label)
                    //.style("left", (d3.event.pageX) + "px")
                    //.style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", (d: any) => {
                console.log(d);
                // div.transition()
                //     .duration(500)
                //     .style("opacity", 0);
            });

        let outerPath = this.svg.selectAll(".outlineArc")
            .data(this.pie(this.data))
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
    }

    public chartDonutHovered(e:any):void {
    }

    public chartLineClicked(e:any):void {
    }

    public chartLineHovered(e:any):void {
    }
}