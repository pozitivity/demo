/**
 * Created by tatiana.gorbunova on 09.04.2017.
 */
module.exports = (app) => {

    require('./globalvar.service')(app);

    app.factory('DiagnosisService', ['$resource', 'GlobalVarService', function($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + '/diagnosis', {}, {
            list: {
                method: 'GET',
                isArray: true
            }
        });
    }])
}