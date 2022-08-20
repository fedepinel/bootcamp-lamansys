import { Component, Input, OnInit } from '@angular/core';
import { tarea } from '../tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})


export class TareaComponent implements OnInit {
  @Input() nombre!:tarea;

  constructor() { }

  ngOnInit(): void {
  }

}
