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
import {BubbleService} from "../../services/BubbleService";
import {Bubble} from "../../models/bubble-model/Bubble";
import * as D3 from "d3";

@Component({
    selector: 'bubble-comp',
    template: require("./bubble.tmpl.html")
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
    private htmlElement: HTMLElement;

    ngOnInit() : void {
        this.bubbleService.getBubbles().subscribe(bubbles => {
            bubbles.map(bubble => this.bubbles.push(bubble));
        });

        this.draw();
    }

    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
    }

    ngOnChanges() {

    }

    draw() : void {
        let diameter = 1500,
            format = d3.format(",d");
            //color = d3.scale.category20c();

        let bubble = d3.layout.pack()
            .sort(null)
            .value(function(d){
                return d.size;
            })
            .size([diameter, diameter])
            .padding(10);

        let canvas = d3.select("#bubble").append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g");
    }
}