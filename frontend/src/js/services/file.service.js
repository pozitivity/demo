module.exports = (app) => {

    require('./globalvar.service')(app);

    app.factory('FileService', ['$resource', 'GlobalVarService', function($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + "/file/:section/:id", {}, {
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
            upload: {
                method: 'POST',
                params: {
                    section: 'upload'
                }
            }
        });
    }]);
}