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
import {TranslateModule} from "@ngx-translate/core";

import {routing} from './app.route';
import {AppComponent}  from './app.component';
import {FileModule} from "./components/file/file.module";
import {CookieService, CookieModule} from "ngx-cookie";
import {MainModule} from "./components/main/main.module";
import {WrapHttpService} from "./shared/services/wrap-http.service";
import {FormsModule} from "@angular/forms";
import {HRIModule} from "./components/hri/hri.module";
import {HriService} from "./shared/services/hri.service";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        RouterModule,
        Ng2BootstrapModule,
        routing,
        ModalModule,
        AlertModule,
        TabsModule,
        CommonModule,
        FormsModule,
        TranslateModule.forRoot(),
        CookieModule.forRoot(),
        MainModule,
        HRIModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "ru"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        WrapHttpService,
        CookieService,
        HriService
    ],
    bootstrap: [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }