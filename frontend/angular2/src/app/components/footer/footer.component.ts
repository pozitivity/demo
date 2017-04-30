import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'footer-comp',
    template: require("./footer.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/footer.scss').toString()]
})

export class FooterComponent {

    public availableTypes: any [] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.availableTypes = [
            {
                name: 'pie',
                caption: {
                    title: 'TYPE_DIAGRAMS.PIE.NAME',
                    description: 'TYPE_DIAGRAMS.PIE.DESCRIPTION'
                }
            },
            {
                name: 'bubble',
                caption: {
                    title: 'TYPE_DIAGRAMS.BUBBLE.NAME',
                    description: 'TYPE_DIAGRAMS.BUBBLE.DESCRIPTION'
                }
            },
            {
                name: 'barchart',
                caption: {
                    title: 'TYPE_DIAGRAMS.BARCHART.NAME',
                    description: 'TYPE_DIAGRAMS.BARCHART.DESCRIPTION'
                }
            },
            {
                name: "pyramid",
                caption: {
                    title: 'TYPE_DIAGRAMS.PYRAMID.NAME',
                    description: 'TYPE_DIAGRAMS.PYRAMID.DESCRIPTION'
                }
            }
        ]
    }

    public to(url: string) {
        this.router.navigateByUrl(url);
    }
}