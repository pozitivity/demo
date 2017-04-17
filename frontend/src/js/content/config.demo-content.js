/**
 * Created by tatiana.gorbunova on 22.03.2016.
 */

import 'angular-route';

module.exports = (app) => {
    require('./demo-content')(app);
    require('./pie/pie')(app);
    require('./chart/chart')(app);
    require('./table/table')(app);
    require('./bubble/bubble')(app);
    require('./barchart/barchart')(app);
    require('./file/file')(app);

    require('../services/barchart.service')(app);
    require('../services/patient.service')(app);
    require('../services/file.service')(app);
    require('../services/dataFile.service')(app);

    app.config(['$stateProvider', ($stateProvider) => {
            $stateProvider.state('content', {
            url: '/content'
            , views: {
                'main@': {
                    template: require('./demo-content.html'),
                    controller: 'DemoContentController',
                    controllerAs: 'ctrl'
                }
            }
        }).state('content.pie', {
            url: '/pie',
            views: {
                '@content': {
                    template: require('./pie/pie.content.tmpl.html'),
                    controller: 'PieController',
                    controllerAs: 'ctrl'
                }
            }
        }).state('content.chart', {
            url: '/chart',
            views: {
                '@content': {
                    template: require('./chart/chart.content.tmpl.html'),
                    controller: 'ChartController'
                }
            }
        }).state('content.table', {
            url: '/table',
            views: {
                '@content': {
                    template: require('./table/table.content.tmpl.html'),
                    controller: 'TableController',
                    controllerAs: 'ctrl'
                }
            }
        }).state('content.bubble', {
            url: '/bubble',
            views: {
                '@content': {
                    template: require('./bubble/bubble.content.tmpl.html'),
                    controller: 'BubbleController',
                    controllerAs: 'ctrl'
                }
            }
        }).state('content.barchart', {
            url: '/barchart',
            views: {
                '@content': {
                    template: require('./barchart/barchart.content.tmpl.html'),
                    controller: 'BarChartController',
                    controllerAs: 'ctrl'
                }
            }
        }).state('content.file', {
            url: '/files',
            views: {
                '@content': {
                    template: require('./file/file.content.tmpl.html'),
                    controller: 'FileController',
                    controllerAs: 'ctrl'
                }
            }
        });
}]);
};
