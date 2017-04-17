module.exports = (app) => {

    require('./globalvar.service')(app);

    app.factory('FileService', ['$resource', 'GlobalVarService', function($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + "/file/:section/:id", {}, {
            upload: {
                method: 'POST',
                params: {
                    section: 'upload'
                }
            }
        });
    }]);
}