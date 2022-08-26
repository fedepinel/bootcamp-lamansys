import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-input-tarea',
  templateUrl: './input-tarea.component.html',
  styleUrls: ['./input-tarea.component.scss']
})
export class InputTareaComponent implements OnInit {

  @Output() tareaNueva = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  nuevaTarea: string = '';

  addTarea(): void{
    if(this.nuevaTarea){
      this.tareaNueva.emit(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
