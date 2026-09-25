import { Component, OnInit, ChangeDetectorRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import {LecturasEsp} from '../../data/interfaces/lecturas-esp.model'
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {interval} from 'rxjs';
import { IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
@Component({
  selector: 'app-frecuencia-cardiaca',
  templateUrl: './frecuencia-cardiaca.component.html',
  styleUrls: ['./frecuencia-cardiaca.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon],
})
export class FrecuenciaCardiacaComponent  implements OnInit, OnDestroy {
  ipEsp: string="http://florence-frecuencia.local/";
  lecturas: Subscription;
  http: HttpClient;
  act: ChangeDetectorRef;

  lect:LecturasEsp={
    bpm:0,
    valido:false,
    presencia:false
  }

  @Output() cerrar = new EventEmitter();

  constructor(pet: HttpClient, det: ChangeDetectorRef) {
    this.http=pet;
    this.act=det;
    addIcons({heart});
  }

  ngOnInit() {
    this.lectBPM();
    this.lecturas=interval(100).subscribe(()=>{this.lectBPM();})
  }

  ngOnDestroy(){
    if(this.lecturas){
      this.lecturas.unsubscribe();
    }
  }

  lectBPM(){
    this.http.get(this.ipEsp).subscribe(
      (res:LecturasEsp)=>{
        this.lect=res;
        this.act.detectChanges();
      }

    )
  }

  ocultar(){
    this.cerrar.emit()
  }

}
