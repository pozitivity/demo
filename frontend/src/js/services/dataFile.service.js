/**
 * Created by tatiana.gorbunova on 17.04.2017.
 */
module.exports = (app) => {

    require('./globalvar.service')(app);

    app.factory('DataFileService', ['$resource', 'GlobalVarService', function($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + "/dataFile/:id", {}, {
            list: {
                method: 'GET',
                isArray: true
            },
            getById: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            },
            save: {
                method: 'POST'
            },
            delete: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            },
        })
    }]);
}