/**
 * Created by tatiana.gorbunova on 22.03.2016.
 */
module.exports = (app) => {
    require('./demo-content/config.demo-content')(app);
    app.config(['$stateProvider', ($stateProvider) => {
        }]);
};