import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BubbleComponent} from "./bubble.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, TranslateModule.forRoot(), FormsModule],
    declarations: [BubbleComponent],
    exports: [BubbleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BubbleModule {

}