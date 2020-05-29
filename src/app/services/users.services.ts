import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actividades } from '../Models/Actividades';
import { Observable } from 'rxjs';
import { Global } from './global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable()
export class UserServices {
    public url: string;
    public identity;
    public token;
    constructor(

        private _http: HttpClient
    ) {
        this.url = Global.url;
    }



    register(user): Observable<any> {
        let json = JSON.stringify(user);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'Register', params, { headers: headers });
    }

    signUp(user, gettoken = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }
        let json = JSON.stringify(user);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url + 'Login', params, { headers: headers });
    }

    getUsers(token,flaj=true): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization',token);
        return this._http.get(this.url + 'Users',  { headers: headers });
    }






    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity && identity != 'undefined') {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');
        if (token && token != 'undefined') {
            this.token = token
        } else {
            this.token = null;
        }
        return this.token;
    }
}

