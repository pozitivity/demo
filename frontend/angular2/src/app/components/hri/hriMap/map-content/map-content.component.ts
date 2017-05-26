/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import * as osmeRegions from "osme";
import {colors} from "../../hri.data";
import {HriService} from "../../../../shared/services/hri.service";

declare var google:any;

@Component({
    selector: 'map-content',
    template: ''
})
export class MapContentComponent implements OnInit, OnChanges {

    @Input() districts;
    @Input() data;

    public colors: any;

    constructor(public mapApiWrapper:GoogleMapsAPIWrapper, private hriService: HriService) {
    }

    ngOnChanges(changes) {
        if (this.hriService.isChange()) {
            this.districts.forEach(d => {
                let da = this.data.find(da => da.districtId == d.id);
                d.fillColor = da.fillColor;
                d.strokeColor = da.strokeColor;
                d.score = da.score;
            });
            this.draw();
        }
    }

    ngOnInit() {

        this.colors = colors;

        console.log(this.data);
        this.districts.forEach(d => {
            switch(d.name) {
                case "Центральный федеральный округ":
                    d.json = 1029256;
                    break;
                case "Дальневосточный федеральный округ":
                    d.json = 1221185;
                    break;
                case "Сибирский федеральный округ":
                    d.json = 1221148;
                    break;
                case "Уральский федеральный округ":
                    d.json = 1113276;
                    break;
                case "Поволжский федеральный округ":
                    d.json = 1075831;
                    break;
                case "Крымский федеральный округ":
                    d.json = 72639;
                    break;
                case "Северо-Западный федеральный округ":
                    d.json = 1216601;
                    break;
                case "Северо-Кавказский федеральный округ":
                    d.json = 389344;
                    break;
                case "Южный федеральный округ":
                    d.json = 1059500;
                    break;
            }
            let da = this.data.find(da => da.districtId == d.id);
            d.fillColor = da.fillColor;
            d.strokeColor = da.strokeColor;
            d.score = da.score;
        });

        this.draw();
    }

    draw() {
        this.mapApiWrapper.getNativeMap().then((map)=> {

            map.setZoom(1);

            this.districts.forEach(d => {
                this.addDistrict(d, map, gzoom, d.fillColor, d.strokeColor);
            });

            map.setZoom(1);

            function gzoom(map, data) {
                function processPoints(geometry, callback, thisArg) {
                    if (geometry instanceof google.maps.LatLng) {
                        callback.call(thisArg, geometry);
                    } else if (geometry instanceof google.maps.Data.Point) {
                        callback.call(thisArg, geometry.get());
                    } else {
                        geometry.getArray().forEach(function (g) {
                            processPoints(g, callback, thisArg);
                        });
                    }
                }

                var bounds = new google.maps.LatLngBounds();
                data.forEach(function(feature) {
                    processPoints(feature.getGeometry(), bounds.extend, bounds);
                });
                map.fitBounds(bounds);
            }
        });
    }

    addDistrict(district, map, gzoom, fillColor, strokeColor) {
        osmeRegions.default.geoJSON(district.json, { lang: 'ru' }, (data) => {
            let collection = osmeRegions.default.toGoogle(data);
            collection.add(map);

            let meta = data.metaData,
                maxLevel = meta.levels[1] + 1;
            collection.setStyles((object, yobject) => {
                let level = object.properties.level;
                console.log(level);
                return ({
                    zIndex: level,
                    zIndexHover: level,
                    strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                    strokeColor: strokeColor,
                    fillColor: fillColor
                })
            });
            gzoom(map, collection.collection);
        });
    }
}