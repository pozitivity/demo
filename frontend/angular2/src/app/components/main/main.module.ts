/**
 * Created by tatiana.gorbunova on 25.04.2017.
 */
import {CommonModule} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {MainComponent} from "./main.component";

@NgModule({
    imports: [CommonModule],
    exports: [MainComponent],
    declarations: [MainComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {

}