/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */

import {Injectable} from "@angular/core";
import {BaseEntityService} from "./base-entity.service";
import {URLSearchParams} from "@angular/http";
import {WrapHttpService} from "./wrap-http.service";

@Injectable()
export class FileService extends BaseEntityService {

    constructor(private http: WrapHttpService) {
        super();
    }

    public upload(file) {
        return this.http.post(this.BACKEND_URL + "/file/upload", file)
            .map(response => response.json())
            .catch(this.handleError);
    }
}