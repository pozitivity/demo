import {BaseEntityService} from "./base-entity.service";
import {URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {WrapHttpService} from "./wrap-http.service";

@Injectable()
export class TableService extends BaseEntityService {
    constructor(private http: WrapHttpService) {
        super();
    }
}