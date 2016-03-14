/**
 * Created by Tatyana on 14.03.2016.
 */
module.exports = (app) => {
    app.config(['$stateProvider', ($stateProvider) => {
            $stateProvider.state('app.home', {
            url: '/',
            views: {
                'main@': {
                    template: require('./home.content.tmpl.html')
                }
            }
        });
    }]);
}