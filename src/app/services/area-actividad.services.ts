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


    getAreas(): Observable<any> {

        return this._http.get(this.url + 'Areas');

    }

    AgregarArea(area, token): Observable<any> {

        let json = JSON.stringify(area);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.post(this.url + 'Areas', params, { headers: headers });


    }

    eliminarArea(id,token){

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);

        return this._http.delete(this.url+'Areas/'+id,{ headers: headers });
    }



}