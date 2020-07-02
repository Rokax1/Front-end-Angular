import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserServices} from '../users.services';

@Injectable()
export class NoAuthGuard implements CanActivate {

    constructor(
        private _router:Router,
        private _userService:UserServices
    ){

    }


    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity && identity.name){
            this._router.navigate(['dashboard/Home']);
            return false
            
        }else{
            return true;
        }

    }
}