/**
 * Created by Tatyana on 24.05.2017.
 */
import {Injectable} from "@angular/core";
import {BaseEntityService} from "./base-entity.service";
import {WrapHttpService} from "./wrap-http.service";

@Injectable()
export class HriService extends BaseEntityService {
    constructor(private http: WrapHttpService) {
        super();
    }

    getDistricts() {
        return this.http.get("/districts")
            .map(response => response.json())
            .catch(this.handleError);
    }

    getIndicators() {
        return this.http.get("/indicators")
            .map(response => response.json())
            .catch(this.handleError);
    }

    getScores() {
        return this.http.get("/scores")
            .map(response => response.json())
            .catch(this.handleError);
    }
}