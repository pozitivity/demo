/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {BaseEntityService} from "./base-entity.service";
import {WrapHttpService} from "./wrap-http.service";
import {DataFile} from "../models/data-file.model";
import {NamedEntity} from "../models/named-entity.model";

@Injectable()
export class DataService extends BaseEntityService {

    constructor(private http: WrapHttpService) {
        super();
        this.initData();
    }

    private contentAsJson: Observable<any> = null;
    private subject: BehaviorSubject<NamedEntity> = new BehaviorSubject(null);

    private initData() {
        if (localStorage.getItem("file") != "undefined") {
            this.subject.next(JSON.parse(localStorage.getItem("file")));
        }
    }

    getContentDataFileAsJson(id: number) : Observable<any> {
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
        localStorage.setItem("file", JSON.stringify(file));
        this.subject.next(file);
    }
}