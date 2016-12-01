/**
 * Created by tatiana.gorbunova on 24.03.2016.
 */
import 'js-data';
import 'js-data-angular';
import '../../../models/models';
module.exports = (app) => {

    require('../../../common/common')(app);
    require('../../../common/spinner')(app);
    app.controller('TableController', TableController)
    ;
};

TableController.$inject = ['$scope', '$translate', 'Diagnosis', 'Patient', '$filter', 'timeConverter', 'spinnerService'];
function TableController($scope, $translate, Diagnosis, Patient, $filter, timeConverter, spinnerService) {
    let ctrl = this;

    ctrl.patients = [];
    ctrl.diagnoses = [];

    console.log('[OK] TableController init');
    ctrl.loading = false;

    Diagnosis.findAll().then(function (diagnoses) {
        ctrl.diagnoses = diagnoses;

        Patient.findAll().then(function (patients) {
            ctrl.patients = patients;
            ctrl.loading = true;
        });
    });

    ctrl.displayDiagnosis = (diagnosisid) => {
        return $filter('getById')(ctrl.diagnoses, diagnosisid).name;
    };

    ctrl.displayDate = (timestamp) => {
        var months = [];
        months.push($translate.instant('months.January.display'));
        months.push($translate.instant('months.February.display'));
        months.push($translate.instant('months.March.display'));
        months.push($translate.instant('months.April.display'));
        months.push($translate.instant('months.May.display'));
        months.push($translate.instant('months.June.display'));
        months.push($translate.instant('months.July.display'));
        months.push($translate.instant('months.August.display'));
        months.push($translate.instant('months.September.display'));
        months.push($translate.instant('months.October.display'));
        months.push($translate.instant('months.November.display'));
        months.push($translate.instant('months.December.display'));
        var date = timeConverter.fromTimestamp(timestamp, months);
        return date;
    };
}
