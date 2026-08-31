import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {DetallePacienteComponent} from '../../components/detalle-paciente/detalle-paciente.component';
import {LectorComponent} from '../../components/lector/lector.component';

@Component({
  selector: 'app-info-emergencia',
  templateUrl: './info-emergencia.page.html',
  styleUrls: ['./info-emergencia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LectorComponent, DetallePacienteComponent]
})
export class InfoEmergenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pacEncontrado: any = null;
  recibirDatos(datos: any) {
    this.pacEncontrado = datos;
  }

}
