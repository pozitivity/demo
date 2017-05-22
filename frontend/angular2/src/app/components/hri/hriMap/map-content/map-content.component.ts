/**
 * Created by tatiana.gorbunova on 21.05.2017.
 */
import {Component, OnInit} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import * as osmeRegions from "osme";
import {colors} from "../../hri.data";

declare var google:any;

@Component({
    selector: 'map-content',
    template: ''
})
export class MapContentComponent implements OnInit {

    constructor(public mapApiWrapper:GoogleMapsAPIWrapper) {
    }

    ngOnInit() {

        this.mapApiWrapper.getNativeMap()
            .then((map)=> {

                console.log(map.getZoom());
                map.setZoom(3);

                // дальневосточный ФО
                osmeRegions.default.geoJSON(1221185, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    let color = colors[0];
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        console.log(color);
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: 2,
                            strokeColor: color.fill,
                            fillColor: '#f2652e',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // центральный ФО
                osmeRegions.default.geoJSON(1029256, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#efa417',
                            fillColor: '#efa417',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // уральский ФО
                osmeRegions.default.geoJSON(1113276, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#f4f416',
                            fillColor: '#f4f416',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // сибирский
                osmeRegions.default.geoJSON(1221148, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#14e584',
                            fillColor: '#14e584',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // северо-западный
                osmeRegions.default.geoJSON(1216601, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#f2652e',
                            fillColor: '#f2652e',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // приволжский
                osmeRegions.default.geoJSON(1075831, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#efa417',
                            fillColor: '#efa417',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // северо-кавказский
                osmeRegions.default.geoJSON(389344, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#f4f416',
                            fillColor: '#f4f416',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // южный
                osmeRegions.default.geoJSON(1059500, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#14e584',
                            fillColor: '#14e584',
                        });
                    });
                    gzoom(map, collection.collection);
                });

                // Автономная республика Крым
                osmeRegions.default.geoJSON(72639, {lang: 'ru'}, function(data) {

                    let collection = osmeRegions.default.toGoogle(data);
                    collection.add(map);

                    let meta = data.metaData,
                        maxLevel = meta.levels[1] + 1;
                    collection.setStyles((object, yobject) => {
                        let level = object.properties.level;
                        return ({
                            zIndex: level,
                            zIndexHover: level,
                            strokeWidth: Math.max(1, level == 2 ? 2 : (maxLevel - level)),
                            strokeColor: '#14e584',
                            fillColor: '#14e584',
                        });
                    });
                    gzoom(map, collection.collection);
                });

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

    // gzoom(map, data) {
    //     function processPoints(geometry, callback, thisArg) {
    //         if (geometry instanceof google.maps.LatLng) {
    //             callback.call(thisArg, geometry);
    //         } else if (geometry instanceof google.maps.Data.Point) {
    //             callback.call(thisArg, geometry.get());
    //         } else {
    //             geometry.getArray().forEach(function (g) {
    //                 processPoints(g, callback, thisArg);
    //             });
    //         }
    //     }
    //
    //     var bounds = new google.maps.LatLngBounds();
    //     data.forEach(function(feature) {
    //         processPoints(feature.getGeometry(), bounds.extend, bounds);
    //     });
    //     map.fitBounds(bounds);
    // }

}