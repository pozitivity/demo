/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PieComponent} from "./pie.component";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [CommonModule, FormsModule, TranslateModule.forRoot()],
    exports: [PieComponent],
    declarations: [PieComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PieModule {

}