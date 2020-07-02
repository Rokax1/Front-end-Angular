import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserServices} from '../users.services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router:Router,
        private _userService:UserServices
    ){

    }


    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity && identity.name){
            return true;
        }else{
            this._router.navigate(['/']);
            return false
        }

    }
}