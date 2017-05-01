/**
 * Created by tatiana.gorbunova on 25.04.2017.
 */
import * as _ from 'lodash';
import {CookieService} from "ngx-cookie";
import {Injectable} from "@angular/core";
import {Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Injectable()
export class CustomHttp extends Http {

    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions,
                private cookieService: CookieService,
                private router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        let tmpUrl:string = typeof url === "string" ? url : url.url;
        return this.intercept(super.request(url, this.getRequestOptionArgs(tmpUrl, options)));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options == null) {
            options = new RequestOptions();
        }
        options.body='';
        return this.intercept(super.get(url,this.getRequestOptionArgs(url, options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(url, options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(url, options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(url, options)));
    }

    getRequestOptionArgs(url: string, options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        let prefix = url;
        if (prefix) {
            if (prefix.startsWith("http")) {
                prefix = prefix.split('/')[3];
            } else if (prefix.charAt(0) == '/') {
                prefix = prefix.substring(1).split('/')[0];
            }
        }

        let cookie = this.cookieService.get(prefix.toUpperCase().concat("-").concat('XSRF-TOKEN'));
        if (cookie) {
            options.headers.append('X-XSRF-TOKEN', cookie);
        }

        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if ((err.status  == 401 || err.status  == 403) && !_.includes(err.url, 'app/auth/login') && !_.includes(err.url, 'app/auth/activate/by/key')) {
                localStorage.removeItem('user_id');
                localStorage.removeItem('name');
                this.router.navigate(['']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });
    }
}
