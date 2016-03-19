module.exports = (app) => {
    require('./home/config.home')(app);
    app.config(['$stateProvider', ($stateProvider) => {
        }]);
};