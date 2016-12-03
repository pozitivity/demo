/**
 * Created by tatiana.gorbunova on 03.12.2016.
 */
import {routing} from "./main.route";
import {MainComponent} from "./main.component";
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ModalModule, AlertModule, TabsModule} from "ng2-bootstrap";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "ng2-translate";

@NgModule({
    imports: [
        routing,
        ModalModule,
        AlertModule,
        TabsModule,
        CommonModule,
        TranslateModule.forRoot()
    ],
    declarations: [
        MainComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}