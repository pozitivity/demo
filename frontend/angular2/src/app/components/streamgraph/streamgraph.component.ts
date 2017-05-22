/**
 * Created by tatiana.gorbunova on 02.05.2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {D3ComponentInterface} from "../../shared/interface/d3.interface";
import {DataService} from "../../shared/services/data.service";

@Component({
    selector: 'stream-comp',
    template: require('./streamgraph.component.html'),
    styles: [require('!style!css!sass!../../../assets/css/partial/streamgraph.scss').toString()]
})
export class StreamgraphComponent {

}