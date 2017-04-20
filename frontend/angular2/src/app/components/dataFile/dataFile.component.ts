/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component} from "@angular/core";
import {DataFileService} from "../../services/DataFileService";
import {DataFile} from "../../models/DataFile";

@Component({
    selector: 'data-file-comp',
    template: require('./dataFile.component.html')
})

export class DataFileComponent {

    constructor(private dataFileService: DataFileService) {

    }

    dataFiles: DataFile[] = [];

    ngOnInit() {
        this.dataFileService.getDataFiles().subscribe(dataFiles => {
            this.dataFiles = dataFiles;
        });
    }
}