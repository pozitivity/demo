/**
 * Created by tatiana.gorbunova on 30.04.2017.
 */
import {Component, Input, AfterContentInit, ElementRef} from "@angular/core";

@Component({
    selector: 'slick-slider',
    template: '<ng-content></ng-content>',
    styles: [require('!style!css!sass!../../../assets/css/partial/slick-slider.scss').toString()]
})

export class SlickSliderComponent implements AfterContentInit {
    @Input() options: any;

    $element: any;

    defaultOptions: any = {};


    constructor(private el: ElementRef) {

    }

    ngAfterContentInit() {
        for (let key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }

        this.$element = $(this.el.nativeElement)
            .slick(this.defaultOptions);

        $('.slick-slide').click((e) => {
            let slideIndex = $(e.currentTarget).data('slick-index');
            this.$element.slick('slickGoTo', slideIndex);
        });
    }
}