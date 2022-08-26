import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Tarea } from '../Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})


export class TareaComponent implements OnInit {
  @Input() nombre!:Tarea;
  @Output() tareaBorrar = new EventEmitter<string>();

  borrarTarea(){
    this.tareaBorrar.emit(this.nombre.nombre);
  }

  tachar(){
    this.nombre.completada = !this.nombre.completada;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
