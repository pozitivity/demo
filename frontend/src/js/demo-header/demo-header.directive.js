/**
 * Created by tatiana.gorbunova on 3/20/2016.
 */
import 'js-data';
import 'js-data-angular';
import * as hl_ru from 'json!../../languages/ru.json';
import * as hl_en from 'json!../../languages/en.json';
import * as hl_cz from 'json!../../languages/cz.json';
require('angular-translate');
import 'angular-cookies';
require('angular-translate-storage-cookie');
require('angular-translate-storage-local');

module.exports = (app) => {
    app.config(['$translateProvider', function ($translateProvider) {
            $translateProvider.translations('ru', hl_ru);
            $translateProvider.translations('en', hl_en);
            $translateProvider.translations('cz', hl_cz);
    }])
        .directive('demoHeader', directive)
};

function directive() {
    return {
        restrict: 'E'
        , scope: {}
        , template: require('./demo-header.html')
        , controller: controller
        , controllerAs: 'dfCtrl'
    }
}

controller.$inject = ['$scope', '$translate'];
function controller ($scope, $translate) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

    console.log('[OK] demo-header controller init');

}