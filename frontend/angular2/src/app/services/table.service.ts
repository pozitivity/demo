import {BaseEntityService} from "./base-entity.service";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class TableService extends BaseEntityService {
    constructor(private http: Http) {
        super();
    }
}