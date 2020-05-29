//importar los modulos del router de angular 
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//componentes que se van a ocupar 
import {UsersComponent} from './Components/users/users.component';
import {ActividadesComponent} from './Components/ActividadesComponents/actividades/actividades.component';
import {AgregarActividadComponent} from './Components/ActividadesComponents/agregar-actividad/agregar-actividad.component';
import {AreaActividadesComponent} from './Components/area-actividades/area-actividades.component';
import {HomeComponent} from './Components/home/home.component';
import {ErrorComponent} from './Components/error/error.component';
import {ActividadPdfComponent} from './Components/ActividadesComponents/actividad-pdf/actividad-pdf.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'Users',component:UsersComponent},
    {path:'Actividades',component:ActividadesComponent},
    {path:'AreaActividades',component:AreaActividadesComponent},
    {path:'Actividades/Crear',component:AgregarActividadComponent},
    {path:'Actividades/Pdf/:filename',component:ActividadPdfComponent},
    {path:'**',component:ErrorComponent}

    

];
//exportar el modulo de rutas 

export const appRoutesProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);