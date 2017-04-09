/**
 * Created by tatiana.gorbunova on 3/21/2016.
 */

module.exports = (app) => {
    app.controller('PieController', PieController);
};

PieController.$inject = ['$scope'];
function PieController ($scope) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

    console.log('[OK] PieController init');
}