import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
/*
import { AngularFileUploaderModule } from "angular-file-uploader";
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { HeaderComponent } from './Estructura/header/header.component';
import { SidebarComponent } from './Estructura/sidebar/sidebar.component';
import { FooterComponent } from './Estructura/footer/footer.component';
import { ActividadComponent } from './ActividadComponents/actividad/actividad.component';
*/
import { UsersComponent } from './users/users.component';
import { ActividadesComponent } from './ActividadComponents/actividades/actividades.component';
import { AreaActividadesComponent } from './AreaComponents/area-actividades/area-actividades.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from '../Components/error/error.component';
import { AgregarActividadComponent } from './ActividadComponents/agregar-actividad/agregar-actividad.component';
import { ActividadPdfComponent } from './ActividadComponents/actividad-pdf/actividad-pdf.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AreaFormComponent} from './AreaComponents/area-form/area-form.component';
import { VerActividadComponent } from './ActividadComponents/ver-actividad/ver-actividad.component';
import { EditarActividadComponent } from './ActividadComponents/editar-actividad/editar-actividad.component';

import {AuthGuard} from '../services/Guards/auth.guard';

const dashboard:Routes=[
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuard],
        children:[
            {path:'',component:HomeComponent},
            {path:'Home',component:HomeComponent},
            {path:'Users',component:UsersComponent},
            {path:'Actividades',component:ActividadesComponent},
            {path:'AreaActividades',component:AreaActividadesComponent},
            {path:'AreaActividades/crear',component:AreaFormComponent},
            {path:'Actividades/Crear',component:AgregarActividadComponent},
            {path:'Actividades/Ver/:id',component:VerActividadComponent},
            {path:'Actividades/Pdf/:filename',component:ActividadPdfComponent},
            {path:'Actividades/Editar/:id',component:EditarActividadComponent},
            {path:'Actividades/Ver/:id/Pdf/:filename',component:ActividadPdfComponent},
            {path:'**',component:ErrorComponent}
        ]
    }

    

    

];

@NgModule({
    imports:[
        RouterModule.forChild(dashboard)
    ],
    exports:[
        RouterModule
    ]
})

export class DashboardRoutingModule{}