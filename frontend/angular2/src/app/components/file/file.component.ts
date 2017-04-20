/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component} from "@angular/core";
import {FileService} from "../../services/FileService";
import {FileUploader} from "ng2-file-upload";

@Component({
    selector: 'file',
    template: require('./file.component.html')
})

export class FileComponent {

    private url: string = "http://localhost:8085/api/file/upload";
    public hasBaseDropZoneOver: boolean = false;
    public uploader: FileUploader = new FileUploader({url: this.url});

    constructor(private fileService: FileService) {

    }

    public fileOverBase(e: any):void {
        this.hasBaseDropZoneOver = e;
    }

}