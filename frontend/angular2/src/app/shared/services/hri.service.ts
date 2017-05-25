/**
 * Created by Tatyana on 24.05.2017.
 */
import {Injectable} from "@angular/core";
import {BaseEntityService} from "./base-entity.service";
import {WrapHttpService} from "./wrap-http.service";

@Injectable()
export class HriService extends BaseEntityService {

    private change: boolean

    constructor(private http: WrapHttpService) {
        super();
    }

    getDistricts() {
        return this.http.get("/hri/districts")
            .map(response => response.json())
            .catch(this.handleError);
    }

    getIndicators() {
        return this.http.get("/hri/indicators")
            .map(response => response.json())
            .catch(this.handleError);
    }

    getScores() {
        return this.http.get("/hri/scores")
            .map(response => response.json())
            .catch(this.handleError);
    }

    public isChange() : boolean {
        return this.change;
    }

    public setChange(change: boolean) {
        this.change = change;
    }
}