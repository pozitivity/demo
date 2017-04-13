/**
 * Created by Tatyana on 12.04.2017.
 */
module.exports = (app) => {

    require('./dialog/upload.file')(app);

    app.controller('FileController', FileController);

};

FileController.$inject = ['$scope', 'FileService', '$translate', '$uibModal'];

function FileController($scope, FileService, $translate, $uibModal) {
    let ctrl = this;

    init();

    function init() {
        console.log('[OK] FileController');
        ctrl.files = [];
        ctrl.files = FileService.list({offset: 0, pageSize: 20});
    }

    ctrl.openUpload = () => {
        let modalInstance = $uibModal.open({
            template: require('./dialog/upload.file.content.tmpl.html'),
            controller: 'UploadFileModalController',
            controllerAs: 'ctrl'
        });

        modalInstance.result.then((value) => {
            console.log(value);
        }, () => {

        });
    }
}