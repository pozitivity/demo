/**
 * Created by tatiana.gorbunova on 3/21/2016.
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
    app.config(['$translateProvider', '$stateProvider', function ($translateProvider, $stateProvider) {
        $translateProvider.translations('ru', hl_ru);
        $translateProvider.translations('en', hl_en);
        $translateProvider.translations('cz', hl_cz);
    }])
        .controller('DemoContentController', DemoContentController)
};

DemoContentController.$inject = ['$scope', '$translate', '$state', '$stateParams'];
function DemoContentController ($scope, $translate, $state, $stateParams) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

    console.log('[OK] demo-content controller init');

    ctrl.languages = [
        { value: 'en', description: 'English' },
        { value: 'ru', description: 'Русский' },
        { value: 'cz', description: 'Čeština' }
    ];

    ctrl.langkey = ctrl.languages[0].value;

    ctrl.changeLang = function (lang) {
        ctrl.langkey = lang;
        $translate.use(lang);
    }
}