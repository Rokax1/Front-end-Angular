import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Actividades } from '../../../Models/Actividades';
import { ActividadService } from "../../../services/actividades.services";
import { UserServices } from "../../../services/users.services";
@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
  providers: [
    ActividadService, UserServices
  ]
})
export class ActividadComponent implements OnInit {

  @Input() actividad: Actividades;
  pdf = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  public token:string;
  public identity;


  constructor(
    private _ActividadesServices: ActividadService,
    private _userServices: UserServices,
  ) { 
    this.actividad= new Actividades(1,'','','','','','','','','');
    this.token=_userServices.getToken();
    this.identity=this._userServices.getIdentity();
  }
  ngOnInit(): void {


    // console.log(this.identity);
    // console.log(this.token);
    console.log( this.actividad.user_encargado);

  }


  borrar(id) {
    this._ActividadesServices.deleteActividad(id,this.token).subscribe(
      resp=>{
        console.log(resp);
        
      },
      error=>{
        console.log(error);
      }
    );
  }

}
