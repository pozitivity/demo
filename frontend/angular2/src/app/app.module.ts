///**
// * Created by tatiana.gorbunova on 03.12.2016.
// */

import {NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {RouterModule, Router} from  '@angular/router';
import {HttpModule, Http, RequestOptions, XHRBackend} from '@angular/http';
import {Ng2BootstrapModule, ModalModule, AlertModule, TabsModule} from "ngx-bootstrap";
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {routing} from './app.route';
import {AppComponent}  from './app.component';
import {TableService} from "./services/table.service";
import {BubbleService} from "./services/bubble.service";
import {DataFileService} from "./services/data-file.service";
import {FileService} from "./services/file.service";
import {TableModule} from "./components/table/table.module";
import {BubbleModule} from "./components/bubble/bubble.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {DataFileModule} from "./components/data-file/data-file.module";
import {FileModule} from "./components/file/file.module";
import {CookieService, CookieModule} from "ngx-cookie";
import {CustomHttp} from "./services/custom-http.service";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '../assets/i18n', '.json');
}

export function createHttpFactory(backend: XHRBackend,
                                  defaultOptions: RequestOptions,
                                  cookieService: CookieService,
                                  router: Router) {
    return new CustomHttp(backend, defaultOptions, cookieService, router);
}

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        RouterModule,
        Ng2BootstrapModule,
        routing,
        TranslateModule.forRoot(),
        ModalModule,
        AlertModule,
        TabsModule,
        CommonModule,
        TableModule,
        BubbleModule,
        TranslateModule.forRoot(),
        DataFileModule,
        FileModule,
        CookieModule.forRoot()
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        FooterComponent],
    providers: [
        {provide: LOCALE_ID, useValue: "ru"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CookieService,
        {
            provide: Http,
            useFactory: createHttpFactory,
            deps: [XHRBackend, RequestOptions, CookieService, Router]
        },
        TableService,
        BubbleService,
        DataFileService,
        FileService
    ],
    bootstrap: [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }