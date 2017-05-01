/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {BaseEntityService} from "./base-entity.service";
import {WrapHttpService} from "./wrap-http.service";
import {DataFile} from "../../models/data-file.model";
import {NamedEntity} from "../../models/named-entity.model";

@Injectable()
export class DataService extends BaseEntityService {

    constructor(private http: WrapHttpService) {
        super();
        this.initData();
    }

    private FILE_NAME_PROPERTY: string = "file";
    private contentAsJson: Observable<any> = null;
    private subject: BehaviorSubject<NamedEntity> = new BehaviorSubject(null);

    private initData() {
        if (this.getFileFromLS() != null) {
            this.subject.next(JSON.parse(localStorage.getItem("file")));
        }
    }

    getContentDataFileAsJson() : Observable<any> {
        let id;
        if (this.getFileFromLS() != null) id = this.getFileFromLS().id;
        if (!this.contentAsJson) {
            this.contentAsJson = this.http.get("/dataFile/asjson/" + id)
                .map(response => response.json())
                .publishReplay(1)
                .refCount()
                .catch(this.handleError);
        }
        return this.contentAsJson;
    }

    getSelectedFile() : Observable<NamedEntity> {
        return this.subject.asObservable();
    }

    selectFile(file: NamedEntity) {
        this.setFileToLS(file);
        this.subject.next(file);
    }

    getFileFromLS() {
        if (localStorage.getItem(this.FILE_NAME_PROPERTY) != "undefined")
            return JSON.parse(localStorage.getItem(this.FILE_NAME_PROPERTY));
        else return null;
    }

    setFileToLS(value: any) {
        localStorage.setItem(this.FILE_NAME_PROPERTY, JSON.stringify(value));
    }
}