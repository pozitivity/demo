/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component, ViewChild, OnInit, EventEmitter, Output} from "@angular/core";
import {DataFileService} from "../../services/data-file.service";
import {FileUploader} from "ng2-file-upload/ng2-file-upload";
import {ModalDirective} from "ngx-bootstrap/modal";
import {read, IWorkBook, utils} from "ts-xlsx";
import {IWorkSheet} from "xlsx";
import {Subject, Observable} from "rxjs";
import {DataFile} from "../../models/data-file.model";

@Component({
    selector: 'file-modal',
    template: require('./file.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/file.scss').toString()]
})

export class FileComponent implements OnInit {

    @ViewChild('fileLgModal') public fileLgModal: ModalDirective;

    @Output() close: EventEmitter<any> = new EventEmitter();

    public hasBaseDropZoneOver: boolean = false;
    public uploader: FileUploader = new FileUploader({ url: BACKEND.contextPath });
    public file: any;

    private fileSubject: Subject<File>;
    private fileObservable: Observable<Array<Array<string>>>;
    public parsedFile: Array<any>;
    public headers: Array<{value: string, check: boolean}>;
    uploadFile: boolean = false;
    private dataFile: DataFile = new DataFile();

    constructor(private dataFileService: DataFileService) {
        this.fileSubject = new Subject();
        this.fileObservable = this.fileSubject.asObservable()
            .switchMap((file: File) => {
                this.dataFile.name = file.name;
                this.dataFile.size = file.size;
                return new Observable<any>((observer) => {
                    let reader: FileReader = new FileReader();
                    reader.onload = (e) => {
                        observer.next((e.target as any).result);
                    };
                    reader.readAsBinaryString(file);
                    return () => {
                        reader.abort();
                    };
                }).map((value: string) => {
                    return read(value, {type: 'binary'});
                }).map((wb: IWorkBook) => {
                    return wb.SheetNames.map((sheetName: string) => {
                        return utils.sheet_to_json(wb.Sheets[sheetName], {header:1});
                    });
                }).catch(e => Observable.of({result: 'failure', payload: e}));
            });
        this.fileObservable.subscribe((file) => {
            this.parsedFile = file[0];
            this.headers = this.parsedFile[0].map(h => {
                return {
                    value: h,
                    check: true
                }
            });
        });
    }

    ngOnInit() {
    }

    public fileOverBase(e: any):void {
        this.hasBaseDropZoneOver = e;
    }

    public show() {
        this.fileLgModal.show();
    }

    public hide() {
        this.headers = null;
        this.file = null;
        this.uploadFile = false;
        this.fileLgModal.hide();
    }

    public fileDropped(fileList: FileList) {
        this.uploadFile = true;
        this.fileSubject.next(fileList[0]);
    }

    upload() {
        this.dataFile.id = null;
        this.dataFile.used = false;

        let indexesSkip: number[] = [];
        this.headers.forEach((item, index, array) => { if (!item.check) indexesSkip.push(index); });
        this.parsedFile.map(pf =>
            pf.forEach((item, index, array) => {
                for (let i = 0; i < indexesSkip.length; i++) {
                    if (index == indexesSkip[i]) array.splice(index, 1);
                }
            })
        );
        console.log(this.parsedFile);
        this.dataFile.headers = JSON.stringify(this.parsedFile.splice(0, 1));
        this.dataFile.content = JSON.stringify(this.parsedFile);
        this.dataFileService.save(this.dataFile).subscribe((resp) => {
            this.close.emit(resp);
            this.hide();
        });
    }

}