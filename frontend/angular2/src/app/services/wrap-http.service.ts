/**
 * Created by tatiana.gorbunova on 25.04.2017.
 */
import {Http, URLSearchParams, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class WrapHttpService {
    constructor(private http: Http) {

    }

    private BACKEND_URL: string = BACKEND.contextPath;

    get(url: string, params?: URLSearchParams) : Observable<Response> {
        return this.http.get(this.BACKEND_URL + url, { search: params });
    }

    post(url: string, data, params?: URLSearchParams) : Observable<Response> {
        return this.http.post(this.BACKEND_URL + url, data, { search: params });
    }
}