/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {CommonModule} from "@angular/common";
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HRIComponent} from "./hri.component";
import {AgmCoreModule} from "@agm/core";
import {HRIMapComponent} from "./hriMap/hri.map.component";
import {HRIDonutComponent} from "./hriDonut/hri.donut.component";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {FormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {NouisliderModule} from "ng2-nouislider";
import {ChartsModule} from "ng2-charts";
import {GoogleMapsAPIWrapper} from "@agm/core";
import {MapContentComponent} from "./hriMap/map-content/map-content.component";

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot(
            {
                apiKey: 'AIzaSyBoHVsD5FVxVsthdBOnDKVG9RZIcvAbRg4'
            }
        ),
        ButtonsModule.forRoot(),
        FormsModule,
        BsDropdownModule.forRoot(),
        NouisliderModule,
        ChartsModule
    ],
    exports: [HRIComponent, HRIMapComponent, HRIDonutComponent, MapContentComponent],
    declarations: [HRIComponent, HRIMapComponent, HRIDonutComponent, MapContentComponent],
    providers: [GoogleMapsAPIWrapper],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HRIModule {

}