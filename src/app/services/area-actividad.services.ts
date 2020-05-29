import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AreaActividad } from '../Models/AreaActividad';
import { Observable } from 'rxjs';
import { Global } from './global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class AreaActividadServices {
    public url: string;
   
    constructor(

        private _http: HttpClient
    ) {
        this.url = Global.url;
    }


getAreas(): Observable<any>{

    return this._http.get(this.url + 'Areas');

}



}