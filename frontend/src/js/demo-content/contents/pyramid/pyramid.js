/** * Created by Tatyana on 14.04.2016. */module.exports = (app) => {    app.controller('PyramidController', PyramidController)    ;}PyramidController.inject = ['$scope', '$translate'];function PyramidController() {    $scope.ctrl = {};    var ctrl = $scope.ctrl;    console.log('[OK] PyramidController init');}