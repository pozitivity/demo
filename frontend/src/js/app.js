/**
 * Created by Tatyana on 14.03.2016.
 */
import 'jquery';
require('angular');
require('js-data');
require('js-data-angular');

var d3 = require('d3');
require('bootstrap');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-translate');
require('d3-scale');

import 'angular-route';
import 'angular-cookies';
import 'ng-file-upload';
import 'angular-resource';
require('angular-translate-storage-local');
require('angular-translate-storage-cookie');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import '../css/app.scss';

require("font-awesome-webpack");

const app = angular.module('demo', [
    'ui.router',
    'ui.bootstrap',
    'js-data',
    'ngCookies',
    'pascalprecht.translate',
    'ngFileUpload',
    'ngRoute',
    'ngResource'
]);

app.config(['$urlRouterProvider', '$stateProvider', '$translateProvider',
        ($urlRouterProvider, $stateProvider, $translateProvider) => {
            $urlRouterProvider.otherwise('/content');
            $translateProvider.preferredLanguage('en');
            $stateProvider
                .state('demo', {
                    url: '',
                    abstract: true
                })
                ;
        }
])

.run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

require('./content/config.demo-content')(app);