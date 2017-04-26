/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {DataFileComponent} from "./data-file.component";
import {CommonModule} from "@angular/common";
import {ModalModule} from "ngx-bootstrap/modal";
import {FileModule} from "../file/file.module";

@NgModule({
    imports: [CommonModule, ModalModule.forRoot(), FileModule],
    exports: [DataFileComponent],
    declarations: [DataFileComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DataFileModule {

}