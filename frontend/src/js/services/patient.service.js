/**
 * Created by tatiana.gorbunova on 09.04.2017.
 */
module.exports = (app) => {

    require('./globalvar.service');

    app.factory('PatientService', ['$resource', 'GlobalVarService', function ($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + "/patients", {}, {
            list: {
                method: 'GET',
                isArray: true
            }
        });
    }]);
}