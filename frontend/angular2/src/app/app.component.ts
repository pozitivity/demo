/**
 * Created by tatiana.gorbunova on 03.12.2016.
 */
import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {Renderer} from "@angular/core";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

import * as EN from "../assets/i18n/en.json";
import * as RU from "../assets/i18n/ru.json";
import * as CZ from "../assets/i18n/cz.json";

@Component({
    selector: 'ls-app',
    template: require('./app.tmpl.html'),
    styles: [require('!style!css!sass!../assets/css/style.scss').toString()],
    encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
    private viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef,
                private renderer: Renderer,
                private router: Router,
                private translate : TranslateService) {
        this.viewContainerRef = viewContainerRef;
        translate.addLangs(["ru", "cz", "en"]);
        translate.setTranslation("ru", RU);
        translate.setTranslation("en", EN);
        translate.setTranslation("cz", CZ);
        translate.setDefaultLang('ru');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ru/) ? browserLang : 'ru');
    }

}