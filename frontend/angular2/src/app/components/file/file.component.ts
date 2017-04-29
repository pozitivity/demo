/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {Component, ViewChild, OnInit, EventEmitter, Output, ElementRef} from "@angular/core";
import {DataFileService} from "../../services/data-file.service";
import {FileUploader} from "ng2-file-upload/ng2-file-upload";
import {ModalDirective} from "ngx-bootstrap/modal";
//import {read, IWorkBook, utils} from "ts-xlsx";
//import {IWorkSheet} from "xlsx";
import {Subject, Observable} from "rxjs";
import {DataFile} from "../../models/data-file.model";
import * as XLSX from "xlsx";


@Component({
    selector: 'file-modal',
    template: require('./file.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/file.scss').toString()]
})

export class FileComponent implements OnInit {

    @ViewChild('fileLgModal') public fileLgModal: ModalDirective;
    @ViewChild('uploadEl') uploadElRef: ElementRef;

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

    private target: any;

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
                    reader.readAsArrayBuffer(file);
                    return () => {
                        reader.abort();
                    };
                }).map((value: ArrayBuffer) => {
                    let arr = this.fixData(value);
                    return XLSX.read(btoa(arr), { type: 'base64' });
                }).map((wb: XLSX.IWorkBook) => {
                    return wb.SheetNames.map((sheetName: string) => {
                        return XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {header:1});
                    });
                }).catch(e => Observable.of({result: 'failure', payload: e}));
            });
        this.fileObservable.subscribe((file) => {
            this.parsedFile = file[0];
            this.headers = this.parsedFile.splice(0, 1)[0]
                .map(h => {
                    return {
                        value: h,
                        check: true
                    }
                });
        });
    }

    private fixData(data) {
        let o = "", l = 0, w = 10240;
        for (; l < data.byteLength / w; ++l)
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

    ngOnInit() {
        this.uploader.onAfterAddingFile = (item => {
            if (this.target) this.target.value = '';
        });
    }

    public fileOverBase(e: any):void {
        this.hasBaseDropZoneOver = e;
    }

    public show() : void {
        this.fileLgModal.show();
    }

    public hide() : void {
        this.headers = null;
        this.uploadFile = false;
        this.uploadElRef.nativeElement.value = "";
        this.uploader.queue.splice(0, 1);
        this.fileLgModal.hide();
    }

    public fileDropped(event) : void {
        this.uploadFile = true;
        if (this.getFileExt(event[0].name) == 'csv')
            this.parseCSV(event[0]);
        else
            this.fileSubject.next(event[0]);
        this.target = event.target || event.srcElement;

    }

    private getFileExt(name: string) : string {
        return name.split('.')[1].toLowerCase();
    }

    private parseCSV(file) {
        console.log(file);
        //console.log(this.csv.parse(file));
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
        this.dataFile.headers = JSON.stringify(this.headers.filter(h => h.check).map(h => h.value));
        this.dataFile.content = JSON.stringify(this.parsedFile);
        this.dataFileService.save(this.dataFile).subscribe((resp) => {
            this.close.emit(resp);
            this.hide();
        });
    }

}