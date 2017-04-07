/**
 * Created by tatiana.gorbunova on 06.04.2016.
 */
import 'js-data';
import 'js-data-angular';
import '../../../models/models';
module.exports = (app) => {

    require('../../../common/common')(app);

    app.controller('BubbleController', BubbleController)
    ;
};

BubbleController.$inject = ['$translate', '$filter', 'Bubble'];
function BubbleController($translate, $filter, Bubble) {
    let ctrl = this;

    ctrl.bubbles = [];

    console.log('[OK] BubbleController init');

    Bubble.findAll().then(function (bubbles) {
        ctrl.bubbles.children = bubbles;
        ctrl.bubbles.name = "bubbles";
        ctrl.draw();
    });

    ctrl.draw = () => {
        var diameter = 1500,
            format = d3.format(",d"),
            color = d3.scale.category20c();

        var bubble = d3.layout.pack()
            .sort(null)
            .value(function(d){
                return d.size;
            })
            .size([diameter, diameter])
            .padding(10);

        var canvas = d3.select("#bubble").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g");

        var nodes = bubble.nodes(ctrl.bubbles);
        var node = canvas.selectAll(".node")
            .data(bubble.nodes(ctrl.bubbles)
                .filter(function(d) { return !d.children; }))
            .enter().append("g")
            // give nodes a class name for referencing
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.name + ": " + format(d.size); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return color(d.size); });

        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .style("font-family", "Panama")
            .text(function(d) { return d.name.substring(0, d.r / 3); });
    }

// not used
//    function classes(root) {
//      var classes = [];
//
//      function recurse(name, node) {
//        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
//        else classes.push({packageName: name, className: node.name, value: node.size});
//      }
//
//      recurse(null, root);
//        var result = [];
//        result.name = "bubbles";
//        result.children = classes;
//      return result;
//   }
}