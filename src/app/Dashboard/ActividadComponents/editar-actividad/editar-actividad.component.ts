import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/services/actividades.services';
import {UserServices} from 'src/app/services/users.services';
import {Users} from '../../../Models/Users';
import {Actividades} from '../../../Models/Actividades';
import { AreaActividad } from '../../../Models/AreaActividad';
import {AreaActividadServices} from 'src/app/services/area-actividad.services';
import {Global} from '../../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css'],
  providers: [ActividadService,UserServices,AreaActividadServices]
})
export class EditarActividadComponent implements OnInit {

  public id;
  public token:string;
  public userSelect:Users[];
  public areasSelect:AreaActividad[];
  public actividad:Actividades;
  public estadoPeticion:string;
  public userEncargado:any;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf",
    maxSize: "10",
    uploadAPI:  {
      url:Global.url+'Actividades/Archivo',
      headers: {
        "Authorization" : this._userServices.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText:"sube tu actividad..."
  };

  constructor(
    private _ActividadesServices:ActividadService,
    private _userServices:UserServices,
    private _AreaActividadServices:AreaActividadServices,
    private _route: ActivatedRoute, private _router: Router,
  ) { 
    this.token=_userServices.getToken();
    this.actividad= new Actividades(1,'','','','',1,'','','','') // posicion 9 usuario creador ajustar cuando se haya guardado en el localStorage
  }
  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {

      this.id = params.id;


      this._ActividadesServices.showActividad(this.id).subscribe(
        resp => {
          //console.log(resp.actividad);
          this.actividad=resp.actividad;

            this._userServices.getUsers(this.token).subscribe(
              resp=>{

                //console.log(resp);
                this.userSelect=resp.users;
              },

              error=>{
                console.log(error);

              }
            )

            this._AreaActividadServices.getAreas().subscribe(
              resp=>{
                //console.log(resp);
                this.areasSelect=resp.areas;
              },
              error=>{
                console.log(error);


              }

            )


          //this.estadoPeticion="success";
        },
        error => {
         console.log(error);
         // this.estadoPeticion="error";
        }

      );
  }
    )}



    onSubmit(form){
      delete this.actividad.area;
      this.userEncargado= this.actividad.user_encargado[0].id;
      this.actividad.user_encargado=this.userEncargado;
      console.log(this.userEncargado);
     console.log(this.actividad);
    }

    SubirArchivo(datos){
      let data= JSON.parse(datos.response);
      this.actividad.archivo=data.archivo;
     
      console.log(this.actividad)
      console.log(data)
   
   }

}
