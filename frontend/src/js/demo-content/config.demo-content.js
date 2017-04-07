/**
 * Created by tatiana.gorbunova on 22.03.2016.
 */

import 'angular-route';

module.exports = (app) => {
    require('./demo-content')(app);
    require('./contents/pie/pie')(app);
    require('./contents/chart/chart')(app);
    require('./contents/table/table')(app);
    require('./contents/bubble/bubble')(app);
    require('./contents/barchart/barchart')(app);
    app.config(['$stateProvider', ($stateProvider) => {
            $stateProvider.state('content', {
            url: '/content'
            , views: {
                'main@': {
                    template: require('./demo-content.html'),
                    controller: 'DemoContentController'
                }
            }
        }).state('content.pie', {
            url: '/pie',
            views: {
                '@content': {
                    template: require('./contents/pie/pie.content.tmpl.html'),
                    controller: 'PieController'
                }
            }
        }).state('content.chart', {
            url: '/chart',
            views: {
                '@content': {
                    template: require('./contents/chart/chart.content.tmpl.html'),
                    controller: 'ChartController'
                }
            }
        }).state('content.table', {
            url: '/table',
            views: {
                '@content': {
                    template: require('./contents/table/table.content.tmpl.html'),
                    controller: 'TableController'
                }
            }
        }).state('content.bubble', {
            url: '/bubble',
            views: {
                '@content': {
                    template: require('./contents/bubble/bubble.content.tmpl.html'),
                    controller: 'BubbleController'
                }
            }
        }).state('content.barchart', {
            url: '/barchart',
            views: {
                '@content': {
                    template: require('./contents/barchart/barchart.content.tmpl.html'),
                    controller: 'BarChartController'
                }
            }
        });
}]);
};
