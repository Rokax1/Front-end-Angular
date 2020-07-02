import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mensajes } from '../Models/Mensajes';
import { Observable } from 'rxjs';
import { Global } from './global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class MensajesServices {

    public url:string;

    constructor(

        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    getMensajes(idActividad,token): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.get(this.url + 'Mensajes/'+idActividad, { headers: headers });

    }



}
