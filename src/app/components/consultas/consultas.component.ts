import { Component, OnInit, Input } from '@angular/core';
import {MedicoTratante} from '../../data/interfaces/medico-tratante.model'
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
  standalone:true,
  imports: []
})
export class ConsultasComponent  implements OnInit {

  @Input() medico: MedicoTratante;

  constructor() { }

  ngOnInit() {}

}
