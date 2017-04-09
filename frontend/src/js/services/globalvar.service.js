/**
 * Created by tatiana.gorbunova on 09.04.2017.
 */
module.exports = (app) => {
    app.factory('GlobalVarService', function() {
        return {
            BACKEND_URL: '/api'
        }
    });
}