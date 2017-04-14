/**
 * Created by Tatyana on 12.04.2017.
 */
module.exports = (app) => {
    app.controller('UploadFileModalController', UploadFileModalController);

    UploadFileModalController.$inject = ['$uibModalInstance', 'FileService', 'Upload', 'GlobalVarService'];

    function UploadFileModalController($uibModalInstance, FileService, Upload, GlobalVarService) {
        let ctrl = this;

        ctrl.upload = (file) => {
            Upload.upload({
                method: 'POST',
                url: 'http://localhost:8080' + GlobalVarService.BACKEND_URL + "/file/upload",
                data: {
                    file: file
                }
            }).then((resp) => {
                console.log(resp);
            }, (err) => {
               console.log(err)
            });
        }
    }
}