import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing ,appRoutesProviders} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DasboardModule} from './Dashboard/dashboard.module';
import {NoAuthGuard} from './services/Guards/noAuthGuard';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {MomentModule} from 'angular2-moment';



import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { UserServices } from './services/users.services';
import { AreaFormComponent } from './Dashboard/AreaComponents/area-form/area-form.component';
import { VerActividadComponent } from './Dashboard/ActividadComponents/ver-actividad/ver-actividad.component';
//import { EditarActividadComponent } from './Dashboard/ActividadComponents/editar-actividad/editar-actividad.component';

//import { DashboardComponent } from './Components/Estructura/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaFormComponent,
    VerActividadComponent,
    //EditarActividadComponent,
   // DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    DasboardModule,
    PdfViewerModule,
    MomentModule
   
  ],
  providers: [
    appRoutesProviders,
    NoAuthGuard,
    UserServices
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
