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

  //En proceso
  compartirTarea(){
    let newVariable: any;
    newVariable = window.navigator;

    if (newVariable && newVariable.share) {
      newVariable.share({
        title: 'Tarea: ' + this.nombre.nombre,
        text: this.nombre.nombre,
        url: 'https://google.com//',
      })
    }else {
      console.log('No anda');
    }
  }

  //Andan las dos, investigar que hace bien la segunda
  copiarTarea(){
    console.log(window.navigator['clipboard'].writeText(this.nombre.nombre));
    //console.log(navigator.clipboard.writeText(this.nombre.nombre).then().catch(e => console.error(e)))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
