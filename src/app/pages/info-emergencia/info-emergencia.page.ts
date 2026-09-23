import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {DetallePacienteComponent} from '../../components/detalle-paciente/detalle-paciente.component';
import {LectorComponent} from '../../components/lector/lector.component';
import {LecturasEsp} from '../../data/interfaces/lecturas-esp.model'
import {DatosEmergencia} from '../../data/interfaces/datos-emergencia.model'
@Component({
  selector: 'app-info-emergencia',
  templateUrl: './info-emergencia.page.html',
  styleUrls: ['./info-emergencia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, LectorComponent, DetallePacienteComponent]
})
export class InfoEmergenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  pacEncontrado: DatosEmergencia;
  recibir(datos: DatosEmergencia) {
    this.pacEncontrado = datos;
  }


  lectActFC: LecturasEsp = {
    uid: "",
    bpm: 0,
    valido: false,
    presencia: false
  };

  recibirLectFC(datos: LecturasEsp) {
    this.lectActFC = datos;
  }

}
