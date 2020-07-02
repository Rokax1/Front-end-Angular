import { Component, OnInit } from '@angular/core';
import  {AreaActividad} from '../../../Models/AreaActividad';
import {AreaActividadServices} from '../../../services/area-actividad.services';
import { UserServices } from '../../../services/users.services';
@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css'],
  providers:[AreaActividadServices,UserServices]
})
export class AreaFormComponent implements OnInit {
public area :AreaActividad;
public token:string;
public estadoPeticion:string;
  constructor(
    private _areaServices:AreaActividadServices,
    private _userServices:UserServices
    ) 
  { 
    this.area= new AreaActividad(1,"","");
    this.token=this._userServices.getToken();
  }

  ngOnInit(): void {
  }


  onSubmit(form){
    this._areaServices.AgregarArea(this.area,this.token).subscribe(
      res=>{
        console.log(res);
        this.estadoPeticion="success";
      },
      error=>{
        console.log(error);
        this.estadoPeticion="error";
      }
    )

    
  }

 
}
