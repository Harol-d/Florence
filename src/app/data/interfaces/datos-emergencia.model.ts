import {MedicoTratante} from '../interfaces/medico-tratante.model'
export interface DatosEmergencia{
  uid: string,
  nombre: string,
  rh: string,
  edad: number,
  religion: string,
  contEmergencia: number,
  antPersonales: string,
  antAlergicos: string,
  medicos: MedicoTratante[]
}
