import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //import para obtener parametros desde las url
import {Global} from '../../../services/global';
@Component({
  selector: 'app-actividad-pdf',
  templateUrl: './actividad-pdf.component.html',
  styleUrls: ['./actividad-pdf.component.css']
})
export class ActividadPdfComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { }
  pdf ="";
  ngOnInit(): void {

    this._route.params.subscribe((params:Params)=>{

      this.pdf= Global.url+'Actividades/Archivo/'+params.filename;

    })

  }

}
