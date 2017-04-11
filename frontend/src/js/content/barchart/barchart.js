/** * Created by Tatyana on 14.04.2016. */module.exports = (app) => {    app.controller('BarChartController', BarChartController)    ;}BarChartController.inject = ['$translate', '$scope', 'BarchartService'];function BarChartController($translate, $scope, BarchartService) {    let ctrl = this;    function init() {        ctrl.columns = [];        console.log('[OK] BarChartController init');        ctrl.types = [            {                value: "MONTH",                label: $translate.instant('barchart.bymonth')            },            {                value: "YEAR",                label: $translate.instant('barchart.byyear')            }        ];        ctrl.selectedType = ctrl.types[0].value;        ctrl.onSelect();    }    ctrl.onSelect = () => {        console.log(ctrl.selectedType);        switch(ctrl.selectedType) {            case 'MONTH':                ctrl.byMonth();            case 'YEAR':                ctrl.byYear();        }    }    ctrl.byMonth = () => {        ctrl.drawByMonth(BarchartService.listByMonth());    }    ctrl.byYear = () => {        ctrl.drawByYear(BarchartService.listByYear());    }    let margin, x, y, width, height, svg, g;    ctrl.draw = () => {        d3.select('svg').remove();        margin = { top: 20, right: 20, bottom: 30, left: 40 },            width = 960 - margin.left - margin.right,            height = 500 - margin.top - margin.bottom;        x = d3.scaleBand().rangeRound([0, width], .05).paddingInner(0.1),            y = d3.scaleLinear().rangeRound([height, 0]);        svg = d3.select("#barchart").append("svg")            .attr("width", width + margin.left + margin.right)            .attr("height", height + margin.top + margin.bottom)        g = svg.append("g")            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");    }    ctrl.drawByYear = (data) => {        ctrl.draw();        data.forEach(d => {            d.year = +d.year;            d.patients = +d.patients;        });        x.domain(data.map(function(d) { return d.year; }));        y.domain([0, d3.max(data, function(d) { return d.patients; })]);        g.append("g")            .attr("class", "axis axis--x")            .attr("transform", "translate(0," + height + ")")            .call(d3.axisBottom(x));        g.append("g")            .attr("class", "axis axis--y")            .call(d3.axisLeft(y).ticks(10, ""))            .append("text")            .attr("transform", "rotate(-90)")            .attr("y", 6)            .attr("dy", "0.71em")            .attr("text-anchor", "end")            .text("Patients");        g.selectAll(".bar")            .data(data)            .enter().append("rect")            .attr("class", "bar")            .attr("x", function(d) { return x(d.year); })            .attr("y", function(d) { return y(d.patients); })            .attr("width", x.bandwidth())            .attr("height", function(d) { return height - y(d.patients); });    }    ctrl.drawByMonth = (data) => {        ctrl.draw();        data.forEach(d => {            d.month = +d.month + +d.year * 12;            d.patients = +d.patients;        });        x.domain(data.map(function(d) { return d.month; }));        y.domain([0, d3.max(data, function(d) { return d.patients; })]);        g.append("g")            .attr("class", "axis axis--x")            .attr("transform", "translate(0," + height + ")")            .call(d3.axisBottom(x));        g.append("g")            .attr("class", "axis axis--y")            .call(d3.axisLeft(y).ticks(10, ""))            .append("text")            .attr("transform", "rotate(-90)")            .attr("y", 6)            .attr("dy", "0.71em")            .attr("text-anchor", "end")            .text("Patients");        g.selectAll(".bar")            .data(data)            .enter().append("rect")            .attr("class", "bar")            .attr("x", function(d) { return x(d.month); })            .attr("y", function(d) { return y(d.patients); })            .attr("width", x.bandwidth())            .attr("height", function(d) { return height - y(d.patients); });    }    init();}