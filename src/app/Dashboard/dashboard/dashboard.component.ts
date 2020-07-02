import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute ,Params} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , DoCheck {

  constructor( private _router :Router,) { }

  ngOnInit(): void {
  
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

}
