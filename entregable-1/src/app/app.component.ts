import { Component } from '@angular/core';
import { Tarea } from './lista-tareas/Tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entregable-1';
  user = 'Fede';

  tareas:Tarea[] = [
    {
      nombre:"Tarea de prueba",
      completada: false
    }
  ];

  saveTarea(nuevaTarea: string){
    let tarea: Tarea = {
      nombre: nuevaTarea,
      completada: false,
    }
    if(this.tareas.findIndex(item => item.nombre === nuevaTarea)){
      this.tareas.unshift(tarea);
    }
    console.log(this.tareas);
  }

  borrarTarea(tarea:string){
    this.tareas.splice(this.tareas.findIndex(item => item.nombre == tarea),1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
