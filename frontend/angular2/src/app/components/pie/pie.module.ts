/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PieComponent} from "./pie.component";

@NgModule({
    imports: [CommonModule],
    exports: [PieComponent],
    declarations: [PieComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PieModule {

}