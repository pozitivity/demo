/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component, ViewChild} from "@angular/core";
import {DataFileService} from "../../shared/services/data-file.service";
import {DataFile} from "../../models/data-file.model";
import {FileComponent} from "../file/file.component";
import {DataService} from "../../shared/services/data.service";
import {NamedEntity} from "../../models/named-entity.model";

@Component({
    selector: 'data-file-comp',
    template: require('./data-file.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/data-file.scss').toString()]
})

export class DataFileComponent {

    constructor(private dataFileService: DataFileService,
                private dataService: DataService) {
    }

    @ViewChild('fileModal') fileModal: FileComponent;
    dataFiles: DataFile[] = [];
    selectedFile: number;

    ngOnInit() {
        this.dataFileService.list().subscribe(dataFiles => {
            this.dataFiles = dataFiles;

            this.dataService.getSelectedFile().subscribe(ne => {
                if (ne != null) this.selectedFile = this.dataFiles.find(dt => dt.id == ne.id).id;
                else this.selectedFile = this.dataFiles[0].id;
            });
        });
    }

    public addDataFile(newDataFile) {
        this.dataFiles.push(newDataFile);
    }

    public openFileModal() {
        this.fileModal.show();
    }

    public deleteDataFile(id: number) {
        this.dataFileService.delete(id).subscribe((resp) => {
            this.dataFiles.forEach((item, index, array) => {
                if (item.id == id) array.splice(index, 1);
            });
        });
    }

    public getCls(fileName) {
        return fileName.split('.')[1];
    }

    public onChangeUsed(id) {
        let selected = this.dataFiles.find(dt => dt.id == id);
        let ne: NamedEntity = new NamedEntity(selected.id, selected.name);
        this.dataService.selectFile(ne);
    }
}