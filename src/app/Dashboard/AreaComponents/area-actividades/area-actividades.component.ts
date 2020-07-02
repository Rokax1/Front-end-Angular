import { Component, OnInit } from '@angular/core';
import {AreaActividadServices} from 'src/app/services/area-actividad.services';
import {UserServices} from 'src/app/services/users.services';
import { AreaActividad } from '../../../Models/AreaActividad';

@Component({
  selector: 'app-area-actividades',
  templateUrl: './area-actividades.component.html',
  styleUrls: ['./area-actividades.component.css'],
  providers:[AreaActividadServices,UserServices]
})
export class AreaActividadesComponent implements OnInit {

  public token :string;
  public estadoPeticion:string;
  public areas:AreaActividad[];
  constructor(
    private _AreaActividadServices:AreaActividadServices,
    private _userServices :UserServices
    ) 
  { 
    this.token=_userServices.getToken();
  }

  ngOnInit(): void {

   this.getAreas();

  }

  getAreas(){
    this._AreaActividadServices.getAreas().subscribe(
      resp=>{
       // this.areas =res
        console.log(resp);
        this.areas=resp.areas;
        this.estadoPeticion='success';
      },
      error=>{
        console.log(error)
        this.estadoPeticion='error';
      }
    );
  }

  eliminar(id){
    this._AreaActividadServices.eliminarArea(id,this.token).subscribe(
      resp=>{
        console.log(resp);
        this.estadoPeticion='success';
        this.getAreas();
      },
      error=>{
        console.log(error);
        this.estadoPeticion='error';
      }
    );


}


}
