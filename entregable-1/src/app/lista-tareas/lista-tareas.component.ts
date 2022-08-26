import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tarea } from './Tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit{
  @Input() tareas!:Tarea[];
  @Output() tareaBorrar = new EventEmitter<string>();

  borrarTarea(tarea:string){
    this.tareaBorrar.emit(tarea);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
