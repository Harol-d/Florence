import { Component, OnInit, Input } from '@angular/core';
import {ConsultasComponent} from '../consultas/consultas.component';
import{FrecuenciaCardiacaComponent} from '../frecuencia-cardiaca/frecuencia-cardiaca.component'
import {DatosEmergencia} from '../../data/interfaces/datos-emergencia.model'
import {IonButton} from '@ionic/angular';
@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.scss'],
  standalone:true,
  imports: [ConsultasComponent, FrecuenciaCardiacaComponent, IonButton]
})
export class DetallePacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() pac: DatosEmergencia;

  mostrarFC: boolean=false;

  abrirFC(){
    this.mostrarFC = true
  }

  cerrarFC(){
    this.mostrarFC=false;
  }

}
