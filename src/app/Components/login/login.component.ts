import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute ,Params} from '@angular/router'
import { Users } from '../../Models/Users';
import {UserServices} from '../../services/users.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServices]
})
export class LoginComponent implements OnInit {

  public user:Users;
  public status:string;
  public token;
  public identity;
  constructor(
    private _userService: UserServices,
    private _router :Router,
    private _route :ActivatedRoute
  ) {
    this.user = new Users(1,'','','','','','');
   }

  ngOnInit(): void {
  }


  onSubmit(form){
    
    this._userService.Login(this.user).subscribe(

      response =>{
        console.log(response);
        //TOKEN
        if(response.status != 'error'){
            this.status='success';
            this.token=response;

            //ususario identificado
                          this._userService.Login(this.user,true).subscribe(

                            response =>{
                              console.log(response);
                              //TOKEN
                              this.identity=response;

                               

                               //persistir datos user identificado
                               console.log(this.token);
                               console.log(this.identity);
                               localStorage.setItem('token',this.token);
                               localStorage.setItem('identity', JSON.stringify(this.identity));
                                //redireccionar al inicio

                                 this._router.navigate(['dashboard/Home']);
                            },
                            error =>{
                              this.status='error';
                              console.log(<any>error);
                      
                            });


        }else{
          this.status='error';
        }



      },
      error =>{
        this.status='error';
        console.log(<any>error.error);

      });

  }
}
