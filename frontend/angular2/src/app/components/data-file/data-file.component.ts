/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component, ViewChild} from "@angular/core";
import {DataFileService} from "../../services/data-file.service";
import {DataFile} from "../../models/data-file.model";
import {FileComponent} from "../file/file.component";

@Component({
    selector: 'data-file-comp',
    template: require('./data-file.component.html')
})

export class DataFileComponent {

    constructor(private dataFileService: DataFileService) {

    }

    @ViewChild('fileModal') fileModal: FileComponent;

    dataFiles: DataFile[] = [];

    ngOnInit() {
        this.dataFileService.list().subscribe(dataFiles => {
            this.dataFiles = dataFiles;
        });
    }

    public openFileModal() {
        this.fileModal.show();
    }
}