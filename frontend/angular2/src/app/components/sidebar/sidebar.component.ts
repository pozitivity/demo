import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'sidebar-comp',
    template: require("./sidebar.tmpl.html")
})

export class SidebarComponent {
    constructor(private http: Http,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    headers: Headers;
}