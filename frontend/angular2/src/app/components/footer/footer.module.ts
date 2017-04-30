/**
 * Created by tatiana.gorbunova on 29.04.2017.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer.component";
import {SlickSliderModule} from "../slick-slider/slick-slider.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [CommonModule, SlickSliderModule, TranslateModule.forRoot()],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterModule {

}