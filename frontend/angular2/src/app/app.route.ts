/**
 * Created by tatiana.gorbunova on 03.12.2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./components/main/main.component";
import {HRIComponent} from "./components/hri/hri.component";

const routes: Routes  = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'hri',
        component: HRIComponent
    }
];

export const appRouteProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);