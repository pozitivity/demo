/**
 * Created by tatiana.gorbunova on 09.04.2017.
 */
module.exports = (app) => {

    require('./globalvar.service')(app);

    app.factory('BarchartService', ['$resource', 'GlobalVarService', function($resource, GlobalVarService) {
        return $resource(GlobalVarService.BACKEND_URL + "/barchart/:section", {}, {
            listByYear: {
                method: 'GET',
                isArray: true,
                params: {
                    section: 'byyear'
                }
            },
            listByMonth: {
                method: 'GET',
                isArray: true,
                params: {
                    section: 'bymonth'
                }
            }
        });
    }]);
}