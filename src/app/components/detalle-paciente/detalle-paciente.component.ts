import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.scss'],
  standalone:true,
  imports: [CommonModule],
})
export class DetallePacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() pac: any = null;

}
