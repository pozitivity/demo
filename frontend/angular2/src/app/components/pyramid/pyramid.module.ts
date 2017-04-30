/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PyramidComponent} from "./pyramid.component";

@NgModule({
    imports: [CommonModule],
    exports: [PyramidComponent],
    declarations: [PyramidComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PyramidModule {

}