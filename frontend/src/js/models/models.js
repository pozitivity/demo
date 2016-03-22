/**
 * Created by tatiana.gorbunova on 3/21/2016.
 */
angular
    .module('dsConfig', [])
    .config(['DSProvider', 'DSHttpAdapterProvider', function (DSProvider, DSHttpAdapterProvider) {
        DSProvider.defaults.basePath = '/api';
    }])
    .run(['DS', function (DS) {
        DS.defaults.basePath = '/api';

        DS.defineResource({
            name: 'diagnosis'
            , endpoint: 'diagnosis'
        });

        DS.defineResource({
            name: 'patient'
            , endpoint: 'patients'
        });
    }])