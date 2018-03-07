import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountsSettingsComponent } from "./accounts-settings/accounts-settings.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
           { 
               path: 'dashboard', 
               component: DashboardComponent, 
               data: {
                   titulo: 'Dashboard'
                } 
            },
        // { path: 'noticias', component: DashboardComponent },   
         //{ path: 'ofertas', component: DashboardComponent },   
        // { path: 'ayudas', component: DashboardComponent },   
         //{ path: 'usuarios', component: DashboardComponent }, 
           { 
               path: 'settings', 
               component: AccountsSettingsComponent,
               data: {
                   titulo: 'Ajustes'
                } 
            },
           { 
               path: 'progress', 
               component: ProgressComponent,
               data: {
                   titulo: 'Progreso'
               } 
            },   
           { 
               path: 'graficas1', 
               component: Graficas1Component,
               data: {
                   titulo: 'Análisis'
               } 
            },
           { 
               path: 'rxjs', 
               component: RxjsComponent,
               data: {
                   titulo: 'Observables'
               } 
            },
           { 
               path: '', 
               redirectTo: '/dashboard', 
               pathMatch: 'full'
            },
        ] 
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );