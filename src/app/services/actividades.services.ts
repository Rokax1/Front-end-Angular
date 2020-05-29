import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Actividades} from '../Models/Actividades';
import {Observable} from 'rxjs';
import {Global} from './global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ActividadService{
    public url:string;
    


    constructor(

        private _http: HttpClient
    ){
        this.url=Global.url;
    }


    getActividades():Observable<any>{
        return this._http.get(this.url+"Actividades");
    }

    AgregarActividad(actividad,token):Observable<any>{

        let json = JSON.stringify(actividad);
        let params = 'json='+json;

        let headers= new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                      .set('Authorization',token);

        return this._http.post(this.url+'Actividades',params,{headers:headers});


    }

    getPdf(pdf,token):Observable<any>{

        let headers= new HttpHeaders().set('Authorization',token);

        return this._http.get(this.url+"Actividades/Archivo"+pdf,{headers:headers});
    }

    


}