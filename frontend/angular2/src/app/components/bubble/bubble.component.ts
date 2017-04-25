import {
    Component,
    ViewEncapsulation,
    OnChanges,
    AfterViewInit,
    ElementRef,
    ViewChild
} from "@angular/core";
import {
    Http,
    Headers
} from "@angular/http";
import {
    Router,
    ActivatedRoute
} from "@angular/router";
import {BubbleService} from "../../services/bubble.service";
import {Bubble} from "../../models/bubble-model/bubble.model";
import * as D3 from "d3";

@Component({
    selector: 'bubble-comp',
    template: require("./bubble.component.html")
})

export class BubbleComponent implements OnChanges, AfterViewInit {

    @ViewChild("container") element: ElementRef;

    constructor(private http: Http,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private bubbleService: BubbleService) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    private headers: Headers;
    private bubbles: Bubble[] = [];
    private host;
    private svg;
    private margin;
    private width;
    private height;
    private xScale;
    private yScale;
    private htmlElement: HTMLElement;

    ngOnInit() : void {
        this.bubbleService.getBubbles().subscribe(bubbles => {
            bubbles.map(bubble => this.bubbles.push(bubble));
        });

        //this.draw();
    }

    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
    }

    ngOnChanges() {

    }

//    private setup(): void {
//        this.margin = {
//            top: 20,
//            right: 20,
//            bottom: 40,
//            left: 40
//        };
//        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
//        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
//        this.xScale = D3.time().scale().range([0, this.width]);
//        this.yScale = D3.scale.linear().range([this.height, 0]);
//    }
//
//    private buildSVG(): void {
//    this.host.html('');
//    this.svg = this.host.append('svg')
//        .attr('width', this.width + this.margin.left + this.margin.right)
//        .attr('height', this.height + this.margin.top + this.margin.bottom)
//        .append('g')
//        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
//}

    // draw() : void {
    //     let diameter = 1500,
    //         format = D3.format(",d"),
    //         color = D3.scale.category20c();
    //
    //     let bubble = D3.layout.pack()
    //         .sort(null)
    //         .value(function(d){
    //             return d.size;
    //         })
    //         .size([diameter, diameter])
    //         .padding(10);
    //
    //     let canvas = D3.select("#bubble").append("svg")
    //         .attr("width", diameter)
    //         .attr("height", diameter)
    //         .append("g");
    // }
}