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
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";

import {routing} from './app.route';
import {AppComponent}  from './app.component';
//import {MainModule} from "./components/main/main.module";
import {TableService} from "./services/TableService";
import {BubbleService} from "./services/BubbleService";
import {DataFileService} from "./services/DataFileService";
import {FileService} from "./services/FileService";
import {TableModule} from "./components/table/table.module";
import {BubbleModule} from "./components/bubble/bubble.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {HeaderComponent} from "./components/header/header.component";
import {DataFileModule} from "./components/dataFile/dataFile.module";
import {FileModule} from "./components/file/file.module";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        RouterModule,
        //MainModule,
        Ng2BootstrapModule,
        routing,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        }),
        ModalModule,
        AlertModule,
        TabsModule,
        CommonModule,
        TableModule,
        BubbleModule,
        TranslateModule.forRoot(),
        DataFileModule,
        FileModule
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent],
    providers: [
        {provide: LOCALE_ID, useValue: "ru"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        TableService,
        BubbleService,
        DataFileService,
        FileService
    ],
    bootstrap:    [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }