import { Component, OnInit } from '@angular/core';
import {Actividades} from '../../../Models/Actividades';
import {ActividadService} from '../../../services/actividades.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  providers: [ActividadService]
})
export class ActividadesComponent implements OnInit {

  
  public hola:string;
  public actividades: Actividades[];
  public status:string;
  public UsuarioEncargado:Array<any>;

  constructor(
    private _ActividadesServices:ActividadService,
    
  ) {
   // this.actividades = this._ActividadesServices.holaMundo();

  }

  ngOnInit(): void {
    this._ActividadesServices.getActividades().subscribe( 
      // console.log(actividades); (actividades: Actividades[])

      response=>{
        if(response.status != 'error'){
          this.status='success';

        //console.log(response)
        this.actividades=response.actividades;
        this.UsuarioEncargado=response.actividades.usuario;
        //console.log(this.actividades);
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
