/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SlickSliderComponent} from "./slick-slider.component";

@NgModule({
    imports: [CommonModule],
    exports: [SlickSliderComponent],
    declarations: [SlickSliderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlickSliderModule {

}