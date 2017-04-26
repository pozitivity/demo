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
import {TableService} from "./services/table.service";
import {BubbleService} from "./services/bubble.service";
import {DataFileService} from "./services/data-file.service";
import {FileService} from "./services/file.service";
import {TableModule} from "./components/table/table.module";
import {BubbleModule} from "./components/bubble/bubble.module";
import {FooterComponent} from "./components/footer/footer.component";
import {DataFileModule} from "./components/data-file/data-file.module";
import {FileModule} from "./components/file/file.module";
import {CookieService, CookieModule} from "ngx-cookie";
import {CustomHttp} from "./services/custom-http.service";
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {MainModule} from "./components/main/main.module";
import {WrapHttpService} from "./services/wrap-http.service";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import {FormsModule} from "@angular/forms";

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
        ModalModule,
        AlertModule,
        TabsModule,
        CommonModule,
        FormsModule,
        TableModule,
        BubbleModule,
        TranslateModule.forRoot(),
        DataFileModule,
        FileModule,
        CookieModule.forRoot(),
        SidebarModule,
        MainModule,
        FileUploadModule
    ],
    declarations: [
        AppComponent,
        FooterComponent
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "ru"},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        WrapHttpService,
        CookieService,
        // {
        //     provide: Http,
        //     useFactory: createHttpFactory,
        //     deps: [XHRBackend, RequestOptions, CookieService, Router]
        // },
        TableService,
        BubbleService,
        DataFileService,
        FileService
    ],
    bootstrap: [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }