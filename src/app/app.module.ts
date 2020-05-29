import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing ,appRoutesProviders} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Estructura/header/header.component';
import { SidebarComponent } from './Components/Estructura/sidebar/sidebar.component';
import { FooterComponent } from './Components/Estructura/footer/footer.component';
import { UsersComponent } from './Components/users/users.component';
import { ActividadesComponent } from './Components/ActividadesComponents/actividades/actividades.component';
import { AreaActividadesComponent } from './Components/area-actividades/area-actividades.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { ActividadComponent } from './Components/ActividadesComponents/actividad/actividad.component';
import { AgregarActividadComponent } from './Components/ActividadesComponents/agregar-actividad/agregar-actividad.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { ActividadPdfComponent } from './Components/ActividadesComponents/actividad-pdf/actividad-pdf.component';
import { LoginComponent } from './Components/Estructura/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    PdfViewerModule
  ],
  providers: [appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
