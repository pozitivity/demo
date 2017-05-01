/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BarchartComponent} from "./barchart.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, TranslateModule.forRoot(), FormsModule],
    exports: [BarchartComponent],
    declarations: [BarchartComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarchartModule {

}