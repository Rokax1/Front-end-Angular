import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //import para obtener parametros desde las url
import { Global } from '../../../services/global';
import { Actividades } from '../../../Models/Actividades';
import { ActividadService } from '../../../services/actividades.services';
import { MensajesServices } from "../../../services/mensajes.services";
import {UserServices  } from "../../../services/users.services";
import { Mensajes } from '../../../Models/Mensajes';

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.component.html',
  styleUrls: ['./ver-actividad.component.css'],
  providers: [ActividadService,MensajesServices,UserServices]
})
export class VerActividadComponent implements OnInit {

  public id: number;
  public actividad: Actividades;
  public estadoPeticion:string;
  public msjs : Mensajes[];
  public token:string;
  public identity;
  constructor(
    private _route: ActivatedRoute, private _router: Router,
    private _actividadesServices: ActividadService,
    private _mensajesServices:MensajesServices,
    private _userServices:UserServices
  ) {
    this.token=_userServices.getToken();
    this.identity=_userServices.getIdentity();

  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {

      this.id = params.id;


      this._actividadesServices.showActividad(this.id).subscribe(
        resp => {
          console.log(resp.actividad);

          this.actividad=resp.actividad;
          this.estadoPeticion="success";
        },
        error => {
         // console.log(error);
          this.estadoPeticion="error";
        }
      );

      this._mensajesServices.getMensajes(this.id,this.token).subscribe(
        resp=>{
         
          this.msjs=resp.msj;
         // console.log( typeof this.msjs[0].created_at);
        },
        error=>{
          console.log(error);

        }
      );






    })
  }




}


