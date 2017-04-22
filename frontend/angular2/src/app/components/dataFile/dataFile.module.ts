/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {DataFileComponent} from "./dataFile.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [DataFileComponent],
    declarations: [DataFileComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DataFileModule {

}