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
    let navegador = window.navigator;

    if (navegador && navegador.share) {
      navegador.share({
        title: 'Tarea: ' + this.nombre.nombre,
        text: this.nombre.nombre,
        url: 'https://fedepinel.github.io/bootcamp-lamansys/',
      })
    }
  }

  copiarTarea(){
    window.navigator['clipboard'].writeText(this.nombre.nombre);

    //Otro modo de hacerlo
    //console.log(navigator.clipboard.writeText(this.nombre.nombre).then().catch(e => console.error(e)))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
