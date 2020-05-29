import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/services/actividades.services';
import {UserServices} from 'src/app/services/users.services';
import {Users} from '../../../Models/Users';
import {Actividades} from '../../../Models/Actividades';
import { AreaActividad } from '../../../Models/AreaActividad';
import {AreaActividadServices} from 'src/app/services/area-actividad.services';
import {Global} from '../../../services/global'


@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css'],
  providers: [ActividadService,UserServices,AreaActividadServices]
})
export class AgregarActividadComponent implements OnInit {

  public token:string;
  public userSelect:Users[];
  public areasSelect:AreaActividad[];
  public actividad:Actividades;
  public estadoPeticion:string;
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
    private _AreaActividadServices:AreaActividadServices
  ) { 
    this.token=_userServices.getToken();
    this.actividad= new Actividades(1,'','','','',1,'','','','') // posicion 9 usuario creador ajustar cuando se haya guardado en el localStorage
  }

  ngOnInit(): void {
    
    this._userServices.getUsers(this.token).subscribe(
      res=>{
        this.userSelect=res.users;
       // console.log(this.userSelect);
      },
      error=>{
        console.log(error);
      }
    );

    this._AreaActividadServices.getAreas().subscribe(
      res=>{
        this.areasSelect=res.areas;
      //console.log(this.areasSelect);
    },
    error=>{
      console.log(error);
    });




    
  }

  onSubmit(form){
    delete this.actividad.usuario;
    //console.log(this.actividad)

    this.actividad.fk_user_creador_actividad=1; // cambiar cuando ya se haya echo el login 
    console.log(this.actividad)
    

    this._ActividadesServices.AgregarActividad(this.actividad,this.token).subscribe(

      res=>{
        console.log(res)
       
       this.estadoPeticion='success';
        form.reset();
      },
      error=>{
        console.log(error)
        this.estadoPeticion='error';
      }

    )



  
  }

  SubirArchivo(datos){
   let data= JSON.parse(datos.response);
   this.actividad.archivo=data.archivo;
  
   console.log(this.actividad)
   console.log(data)

}

}
