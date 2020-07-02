//importar los modulos del router de angular 
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {NoAuthGuard} from './services/Guards/noAuthGuard';

//componentes que se van a ocupar 
import {UsersComponent} from './Dashboard/users/users.component';
import {ActividadesComponent} from './Dashboard/ActividadComponents/actividades/actividades.component';
import {AgregarActividadComponent} from './Dashboard/ActividadComponents/agregar-actividad/agregar-actividad.component';
import {AreaActividadesComponent} from './Dashboard/AreaComponents/area-actividades/area-actividades.component';
import {HomeComponent} from './Dashboard/home/home.component';
import {ErrorComponent} from './Components/error/error.component';
import {ActividadPdfComponent} from './Dashboard/ActividadComponents/actividad-pdf/actividad-pdf.component';
import {LoginComponent} from './Components/login/login.component';

//import {DashboardComponent} from './Components/Estructura/dashboard/dashboard.component';

const appRoutes:Routes=[

    {path:'',canActivate:[NoAuthGuard], component:LoginComponent},
    {path:'**',component:ErrorComponent}

    

];
//exportar el modulo de rutas 

export const appRoutesProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);