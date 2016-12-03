/**
 * Created by tatiana.gorbunova on 03.12.2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainComponent} from "./main.component";
const routes: Routes  = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: MainComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);