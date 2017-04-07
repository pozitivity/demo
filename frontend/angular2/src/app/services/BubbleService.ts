import {BaseEntityService} from "./BaseEntityService";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Bubble} from "../models/bubble-model/Bubble";

@Injectable()
export class BubbleService extends BaseEntityService {
    constructor(private http: Http) {
        super();
    }

    private BACKEND_URL = "http://localhost:8080/api";

    private bubblesObservable: Observable<Bubble[]>;

    getBubbles() : Observable<Bubble[]> {
        this.bubblesObservable = this.http.get(this.BACKEND_URL + '/bubble')
            .map(response => response.json());

        return this.bubblesObservable;
    }
}