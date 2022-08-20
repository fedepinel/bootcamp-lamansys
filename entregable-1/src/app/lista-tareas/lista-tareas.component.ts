import { Component, OnInit } from '@angular/core';
import { tarea } from './tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tareas:tarea[] = [
    {
      nombre:"Tarea 1",
      id:1
    },
    {
      nombre:"Tarea 2",
      id:2
    },
    {
      nombre:"Tarea 3",
      id:3
    },
    {
      nombre:"Tarea 4",
      id:4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
