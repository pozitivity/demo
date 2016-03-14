/**
 * Created by Tatyana on 14.03.2016.
 */
module.exports = (app) => {
    require('./home/config.home')(app);
    app.config(['$stateProvider', ($stateProvider) => {
        }]);
}