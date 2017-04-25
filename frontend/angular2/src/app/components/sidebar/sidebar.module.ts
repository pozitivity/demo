/**
 * Created by tatiana.gorbunova on 25.04.2017.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./sidebar.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [CommonModule, TranslateModule.forRoot()],
    exports: [SidebarComponent],
    declarations: [SidebarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SidebarModule {

}