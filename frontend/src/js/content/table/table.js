/**
 * Created by tatiana.gorbunova on 24.03.2016.
 */

//import '../../services/patient.service';

module.exports = (app) => {

    require('../../common/common')(app);
    require('../../common/spinner')(app);

    app.controller('TableController', TableController)
    ;
};

TableController.$inject = ['$scope', '$translate', '$filter', 'timeConverter', 'spinnerService', 'PatientService'];
function TableController($scope, $translate, $filter, timeConverter, spinnerService, PatientService) {
    let ctrl = this;

    function init() {
        ctrl.patients = [];
        ctrl.diagnoses = [];
        console.log('[OK] TableController init');
        ctrl.loading = false;
        ctrl.offset = 0;
        ctrl.pageSize = 20;
    }

    ctrl.patients = PatientService.list({offset: ctrl.offset, pageSize: ctrl.pageSize});

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
