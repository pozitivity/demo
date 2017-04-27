/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */

import {Injectable} from "@angular/core";
import {BaseEntityService} from "./base-entity.service";
import {Observable} from "rxjs";
import {DataFile} from "../models/data-file.model";
import {WrapHttpService} from "./wrap-http.service";
import {URLSearchParams} from "@angular/http";

@Injectable()
export class DataFileService extends BaseEntityService {

    constructor(private http: WrapHttpService) {
        super();
    }

    list(offset?: number, pageSize?: number): Observable<DataFile[]> {
        let params: URLSearchParams = new URLSearchParams();
        if (offset) params.append("offset", String(offset));
        if (pageSize) params.append("pageSize", String(pageSize));
        return this.http.get("/dataFile", params)
            .map(response => response.json())
            .catch(this.handleError);
    }

    save(dataFile: DataFile): Observable<DataFile> {
        return this.http.post("/dataFile", dataFile)
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id: number) {
        return this.http.delete("/dataFile/" + id)
            .catch(this.handleError);
    }

}