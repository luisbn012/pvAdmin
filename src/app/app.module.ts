import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './shared/nopage/nopage.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

// ROUTES
import { APP_ROUTES } from './app.routes';

// MODULES
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
