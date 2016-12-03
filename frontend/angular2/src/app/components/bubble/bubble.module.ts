import {CUSTOM_ELEMENTS_SCHEMA, NgModule, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BubbleComponent} from "./bubble.component";

@NgModule({
    imports: [CommonModule],
    declarations: [BubbleComponent],
    exports: [BubbleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BubbleModule {

}