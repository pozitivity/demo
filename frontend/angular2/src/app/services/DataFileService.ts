/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/Http";
import {BaseEntityService} from "./BaseEntityService";
import {Observable} from "rxjs";
import {DataFile} from "../models/DataFile";

@Injectable()
export class DataFileService extends BaseEntityService {

    constructor(private http: Http) {
        super();
    }

    getDataFiles(): Observable<DataFile[]> {
        return this.http.get(this.BACKEND_URL + "/dataFile")
            .map(response => response.json())
            .catch(this.handleError);
    }

}