/**
 * Created by tatiana.gorbunova on 3/21/2016.
 */

module.exports = (app) => {
    app.controller('ChartController', ChartController);
};

ChartController.$inject = ['$scope'];
function ChartController ($scope) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

    console.log('[OK] ChartController init');
}