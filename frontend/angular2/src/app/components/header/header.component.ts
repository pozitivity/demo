import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'header-comp',
    template: require("./header.tmpl.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/header/header.scss').toString()]
})

export class HeaderComponent {

}