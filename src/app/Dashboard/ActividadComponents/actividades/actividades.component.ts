import { Component, OnInit } from '@angular/core';
import {Actividades} from '../../../Models/Actividades';
import {ActividadService} from '../../../services/actividades.services';
import {UserServices} from '../../../services/users.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  providers: [ActividadService]
})
export class ActividadesComponent implements OnInit {

public token:string;

  public hola:string;
  public actividades: Actividades[];
  public status:string;
  public UsuarioEncargado:Array<any>;

  constructor(
    private _ActividadesServices:ActividadService,
    private _userServices:UserServices
    
  ) {
   // this.actividades = this._ActividadesServices.holaMundo();
   this.token=this._userServices.getToken();

  }

  ngOnInit(): void {
    this._ActividadesServices.getActividades(this.token).subscribe( 
      // console.log(actividades); (actividades: Actividades[])

      response=>{
        if(response.status != 'error'){
          this.status='success';
          
       // console.log(response)
        this.actividades=response.actividades;
        console.log(this.actividades);
        this.UsuarioEncargado=response.actividades.usuario;
       // console.log(this.actividades);
     
       // console.log( typeof response.actividades.usuario);



        }else{
          this.status='error';



        }
      },
      error=>{
        this.status='error';
        console.log(<any>error);


      
    });
  

  }
}
