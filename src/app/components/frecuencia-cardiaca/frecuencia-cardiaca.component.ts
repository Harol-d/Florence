import { Component, OnInit, Input } from '@angular/core';
import {LecturasEsp} from '../../data/interfaces/lecturas-esp.model'

@Component({
  selector: 'app-frecuencia-cardiaca',
  templateUrl: './frecuencia-cardiaca.component.html',
  styleUrls: ['./frecuencia-cardiaca.component.scss'],
  standalone: true,
  imports: [],
})
export class FrecuenciaCardiacaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() lect: LecturasEsp;

}
