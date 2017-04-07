/**
 * Created by tatiana.gorbunova on 3/21/2016.
 */
angular
    .module('dsConfig', [])
    .config(['DSProvider', 'DSHttpAdapterProvider', function (DSProvider, DSHttpAdapterProvider) {
        DSProvider.defaults.basePath = '/api';
    }])
    .factory('Patient', function(DS) {
        return DS.defineResource('patients');
    })
    .factory('Diagnosis', function(DS) {
        return DS.defineResource('diagnosis');
    })
    .factory('Bubble', function(DS) {
        return DS.defineResource('bubble');
    })
    .factory('BarChart', function(DS) {
        return DS.defineResource({
            name:'barchart',
            idAttribute: 'year'
        });
    });
    // .run(['DS', function (DS) {
    //     DS.defaults.basePath = '/api';
    //
    //     DS.defineResource({
    //         name: 'diagnosis'
    //         , endpoint: 'diagnosis'
    //     });
    //
    //     DS.defineResource({
    //         name: 'patient'
    //         , endpoint: 'patients'
    //     });
    //
    //     DS.defineResource({
    //         name: 'pyramid',
    //         idAttribute: 'bymonth'
    //     })
    // }])
