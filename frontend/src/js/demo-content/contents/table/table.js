/**
 * Created by tatiana.gorbunova on 24.03.2016.
 */
import 'js-data';
import 'js-data-angular';
import '../../../models/models';
module.exports = (app) => {
    app.controller('TableController', TableController);
};

TableController.$inject = ['$scope', '$translate', 'Diagnosis', 'Patient'];
function TableController($scope, $translate, Diagnosis, Patient) {
    $scope.ctrl = {};
    var ctrl = $scope.ctrl;

    console.log('[OK] TableController init');

    Diagnosis.findAll().then(function (diagnoses) {
        ctrl.lengthDiagnosis = diagnoses.data.length;
    });

    Patient.findAll().then(function (patients) {
       debugger;
    });

}