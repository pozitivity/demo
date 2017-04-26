/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component, ViewChild, OnInit} from "@angular/core";
import {FileService} from "../../services/file.service";
import {FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {ModalDirective} from "ngx-bootstrap/modal";
import {read, IWorkBook} from "ts-xlsx";
import {IWorkSheet} from "xlsx";
import {Subject, Observable} from "rxjs";

@Component({
    selector: 'file-modal',
    template: require('./file.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/file.scss').toString()]
})

export class FileComponent implements OnInit {

    @ViewChild('fileLgModal') public fileLgModal: ModalDirective;

    private url: string = "http://localhost:8085/api/file/upload";
    public hasBaseDropZoneOver: boolean = false;
    public uploader: FileUploader = new FileUploader({url: this.url});
    public file: any;
    public wb: IWorkBook;

    private fileSubject: Subject<File>;
    private fileObservable: Observable<{ result: string, payload: any }>;

    constructor(private fileService: FileService) {
        this.fileSubject = new Subject();
        this.fileObservable = this.fileSubject.asObservable()
            .switchMap((file: File) => {
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
                    console.log(wb);
                    return wb.SheetNames.map((sheetName: string) => {
                        console.log(sheetName);
                        let sheet: IWorkSheet = wb.Sheets[sheetName];
                        console.log(sheet);
                        return sheet;
                    });
                }).map((results: Array<any>) => {
                    console.log(results);
                    return {result: 'success', payload: results};
                })
                .catch(e => Observable.of({result: 'failure', payload: e}));
            });
        this.fileObservable.subscribe((f) => {
            console.log(f);
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
        this.fileLgModal.hide();
    }

    // public changeUploadFile(e) {
    //     console.log(e);
    //     let reader: FileReader = new FileReader();
    //     //reader.readAsBinaryString(this.uploader.queue[0]._file);
    //     //this.wb = read(reader.readAsBinaryString(this.uploader.queue[0]._file), {type: 'binary'});
    // }
    //
    public fileDropped(fileList: FileList) {
        console.log(fileList);
        this.fileSubject.next(fileList[0]);
    }

}