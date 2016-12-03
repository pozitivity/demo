import {CUSTOM_ELEMENTS_SCHEMA, NgModule, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./table.component";

@NgModule({
    imports: [CommonModule],
    declarations: [TableComponent],
    exports: [TableComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TableModule {

}