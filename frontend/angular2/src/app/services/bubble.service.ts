import {BaseEntityService} from "./base-entity.service";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Bubble} from "../models/bubble-model/bubble.model";

@Injectable()
export class BubbleService extends BaseEntityService {
    constructor(private http: Http) {
        super();
    }

    getBubbles() : Observable<Bubble[]> {
        return this.http.get(this.BACKEND_URL + '/bubble')
            .map(response => response.json());
    }
}