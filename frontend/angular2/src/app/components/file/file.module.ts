/**
 * Created by tatiana.gorbunova on 20.04.2017.
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FileComponent} from "./file.component";
import {CommonModule} from "@angular/common";
import {ModalModule} from "ngx-bootstrap/modal";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, ModalModule, ProgressbarModule, FileUploadModule, FormsModule],
    exports: [FileComponent],
    declarations: [FileComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FileModule {

}