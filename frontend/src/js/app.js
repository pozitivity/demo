/**
 * Created by Tatyana on 14.03.2016.
 */
require('jquery');
require('angular');
require('js-data');
require('js-data-angular');

var d3 = require('d3');
require('bootstrap');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-translate');

require('ng-file-upload');
require('angular-translate-storage-local');

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');

require('../css/app.scss');

require("font-awesome-webpack");

const app = angular.module('demo', [
    'ui.router',
    'ui.bootstrap',
    'js-data',
    'pascalprecht.translate',
    'ngCookies',
    'ngFileUpload'
]);

app.config(['$urlRouterProvider', '$stateProvider', '$translateProvider',
        ($urlRouterProvider, $stateProvider, $translateProvider) => {
            $urlRouterProvider.otherwise('/');
            $translateProvider.useLocalStorage();
            $translateProvider.preferredLanguage('ru');

            $stateProvider
                .state('app', {
                    url: '',
                    abstract: true,
                    views: {
                        'header@': {
                            template: require("./index.header.tmpl.html")
                        }
                    }
                });
        }
]);

app.controller('appController', ['$translate',
    function($translate) {
        console.log("[OK] AppController");
    }
]);

require('./states/config.states');