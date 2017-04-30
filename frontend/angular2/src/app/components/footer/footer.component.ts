import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'footer-comp',
    template: require("./footer.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/footer.scss').toString()]
})

export class FooterComponent {
    constructor() {

    }

    public to(url: string) {
        console.log(url);
    }
}