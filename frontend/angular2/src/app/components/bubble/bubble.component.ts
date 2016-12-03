import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'bubble-comp',
    template: require("./bubble.tmpl.html")
})

export class BubbleComponent {
    constructor(private http: Http,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    headers: Headers;
}