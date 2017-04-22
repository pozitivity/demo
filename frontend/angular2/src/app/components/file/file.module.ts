/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FileComponent} from "./file.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [FileComponent],
    declarations: [FileComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FileModule {

}