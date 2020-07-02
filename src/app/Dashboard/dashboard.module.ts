import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DashboardRoutingModule} from './dashboard.routing.module';


import { HeaderComponent } from './Estructura/header/header.component';
import { SidebarComponent } from './Estructura/sidebar/sidebar.component';
import { FooterComponent } from './Estructura/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { ActividadesComponent } from './ActividadComponents/actividades/actividades.component';
import { AreaActividadesComponent } from './AreaComponents/area-actividades/area-actividades.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from '../Components/error/error.component';
import { ActividadComponent } from './ActividadComponents/actividad/actividad.component';
import { AgregarActividadComponent } from './ActividadComponents/agregar-actividad/agregar-actividad.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { ActividadPdfComponent } from './ActividadComponents/actividad-pdf/actividad-pdf.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app.routing';
import {MomentModule} from 'angular2-moment';
import { EditarActividadComponent } from './ActividadComponents/editar-actividad/editar-actividad.component';


import {UserServices} from '../services/users.services';
import {AuthGuard} from '../services/Guards/auth.guard';

@NgModule({
    declarations:[
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        UsersComponent,
        ActividadesComponent,
        AreaActividadesComponent,
        HomeComponent,
        ErrorComponent,
        ActividadComponent,
        AgregarActividadComponent,
        ActividadPdfComponent,
        DashboardComponent,
        EditarActividadComponent
    ],
    imports:[
        BrowserModule,
        routing,
        FormsModule,
        HttpClientModule,
        AngularFileUploaderModule,
        PdfViewerModule,
        DashboardRoutingModule,
        MomentModule
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        UsersComponent,
        ActividadesComponent,
        AreaActividadesComponent,
        HomeComponent,
        ErrorComponent,
        ActividadComponent,
        AgregarActividadComponent,
        ActividadPdfComponent,
    ],
    providers:[UserServices,AuthGuard]
})

export class DasboardModule{}