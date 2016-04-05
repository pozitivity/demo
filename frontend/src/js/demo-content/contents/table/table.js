/**
 * Created by tatiana.gorbunova on 24.03.2016.
 */
import 'js-data';
import 'js-data-angular';
import '../../../models/models';
module.exports = (app) => {

    require('../../../common/common')(app);

    app.controller('TableController', TableController)
    ;
};

TableController.$inject = ['$scope', '$translate', 'Diagnosis', 'Patient', '$filter', 'timeConverter', 'Bubble'];
function TableController($scope, $translate, Diagnosis, Patient, $filter, timeConverter, Bubble) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

//    ctrl.patients = [];
//    ctrl.diagnoses = [];
    ctrl.bubbles = [];

    console.log('[OK] TableController init');

//    Diagnosis.findAll().then(function (diagnoses) {
//        ctrl.diagnoses = diagnoses;

//        Patient.findAll().then(function (patients) {
//            ctrl.patients = patients;
//        });
//    })

    Bubble.findAll().then(function (bubbles) {
        ctrl.bubbles = bubbles;
        ctrl.draw();
    });

    ctrl.displayDiagnosis = function(diagnosisid) {
        return $filter('getById')(ctrl.diagnoses, diagnosisid).name;
    }

    ctrl.displayDate = function(timestamp) {
        var months = [];
        months.push($translate.instant('months.January.display'));
        months.push($translate.instant('months.February.display'));
        months.push($translate.instant('months.March.display'));
        months.push($translate.instant('months.April.display'));
        months.push($translate.instant('months.May.display'));
        months.push($translate.instant('months.June.display'));
        months.push($translate.instant('months.July.display'));
        months.push($translate.instant('months.August.display'));
        months.push($translate.instant('months.September.display'));
        months.push($translate.instant('months.October.display'));
        months.push($translate.instant('months.November.display'));
        months.push($translate.instant('months.December.display'));
        var date = timeConverter.fromTimestamp(timestamp, months);
        return date;
    }

    ctrl.draw = function () {
        var diameter = 600,
            format = d3.format(",d"),
            color = d3.scale.category20c();

        var topFrequency = '{"name":"frequencyData",    "children":[        {            "author1":"TUYTTENS, FAM",            "frequency":7        },     ' +
            '  { "author1":"REVILLA, E", "frequency":7        },        {            "author1":"ROPER, TJ",            "frequency":7        },      ' +
            '  { "author1":"MACDONALD, DW", "frequency":6        },        {            "author1":"WOODROFFE, R",            "frequency":5        },  ' +
            '  { "author1":"CHEESEMAN, CL", "frequency":4        },        {            "author1":"GALLAGHER, J",            "frequency":4        },' +
            ' {            "author1":"KOWALCZYK, R",            "frequency":3        },        {            "author1":"HANCOX, M",            "frequency":3        },' +
            '{            "author1":"VIRGOS, E",            "frequency":3        }    ]}';

        var bubble = d3.layout.pack()
            .sort(null)
            .value(function(d){
                return d.frequency;
            })
            .size([diameter, diameter]);

        // select chart3 div and append svg canvas for graph
        var canvas = d3.select("#bubble").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g");

        topFrequency = JSON.parse(topFrequency);
        // should return array of nodes associated with data
        // computed position of nodes & graphical data for each node
        topFrequency.name = "frequencyData";
        topFrequency.children = ctrl.bubbles;
        var nodes = bubble.nodes(topFrequency);

        console.log(topFrequency);

        debugger;
        var node = canvas.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            // give nodes a class name for referencing
            .attr("class", "node")
            .attr("transform", function(d) {
                debugger;
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("title")
            .text(function(d) { return d.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            //.style("fill", function(d) { return color(d.packageName); });

        /*var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select("#bubble").append("svg")
            .data(ctrl.bubbles)
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");


        var node = svg.selectAll(".node")
            //.data(ctrl.bubbles)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";});

        node.append("title")
            .text(function(d) { return d.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return color(d.packageName); });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.className.substring(0, d.r / 3); });

        d3.select(self.frameElement).style("height", diameter + "px");*/
    }

// Returns a flattened hierarchy containing all leaf nodes under the root.
    function classes(root) {
      var classes = [];

      function recurse(name, node) {
        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
        else classes.push({packageName: name, className: node.name, value: node.size});
      }

      recurse(null, root);
      return {children: classes};
    }

}
