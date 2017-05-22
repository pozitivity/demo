/**
 * Created by tatiana.gorbunova on 03.12.2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {TableComponent} from "./components/table/table.component";
import {BubbleComponent} from "./components/bubble/bubble.component";
import {DataFileComponent} from "./components/data-file/data-file.component";
import {MainComponent} from "./components/main/main.component";
import {PieComponent} from "./components/pie/pie.component";
import {BarchartComponent} from "./components/barchart/barchart.component";
import {PyramidComponent} from "./components/pyramid/pyramid.component";
import {HRIComponent} from "./components/hri/hri.component";

const routes: Routes  = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'bubble',
        component: BubbleComponent
    },
    {
        path: 'dataFile',
        component: DataFileComponent
    },
    {
        path: 'pie',
        component: PieComponent
    },
    {
        path: 'barchart',
        component: BarchartComponent
    },
    {
        path: 'pyramid',
        component: PyramidComponent
    },
    {
        path: 'hri',
        component: HRIComponent
    }
];

export const appRouteProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);