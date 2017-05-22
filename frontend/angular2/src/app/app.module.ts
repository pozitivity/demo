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
import {AgmCoreModule} from "@agm/core";

import {routing} from './app.route';
import {AppComponent}  from './app.component';
import {TableService} from "./shared/services/table.service";
import {BubbleService} from "./shared/services/bubble.service";
import {DataFileService} from "./shared/services/data-file.service";
import {FileService} from "./shared/services/file.service";
import {TableModule} from "./components/table/table.module";
import {BubbleModule} from "./components/bubble/bubble.module";
import {DataFileModule} from "./components/data-file/data-file.module";
import {FileModule} from "./components/file/file.module";
import {CookieService, CookieModule} from "ngx-cookie";
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {MainModule} from "./components/main/main.module";
import {WrapHttpService} from "./shared/services/wrap-http.service";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import {FormsModule} from "@angular/forms";
import {FooterModule} from "./components/footer/footer.module";
import {PieModule} from "./components/pie/pie.module";
import {SlickSliderModule} from "./components/slick-slider/slick-slider.module";
import {BarchartModule} from "./components/barchart/barchart.module";
import {PyramidModule} from "./components/pyramid/pyramid.module";
import {DataService} from "./shared/services/data.service";
import {HRIModule} from "./components/hri/hri.module";

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
        FileUploadModule,
        FooterModule,
        PieModule,
        SlickSliderModule,
        BarchartModule,
        PyramidModule,
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
        TableService,
        BubbleService,
        DataFileService,
        FileService,
        DataService
    ],
    bootstrap: [ AppComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }