import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    declarations: [
        NopageComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        NopageComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ], 
    imports:[
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}