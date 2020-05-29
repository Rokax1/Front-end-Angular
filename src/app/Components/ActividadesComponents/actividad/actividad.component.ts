import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';

import {Actividades} from '../../../Models/Actividades';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  @Input() actividad:Actividades;
  pdf ="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  
  constructor() { }
  ngOnInit(): void {
  }

}
