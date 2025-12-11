export enum TabId {
  ACCESO = 'acceso',
  PUNTUACION = 'puntuacion',
  LLAMAMIENTOS = 'llamamientos',
  PENALIZACIONES = 'penalizaciones'
}

export interface SimulatorState {
  experienciaSNS: number;
  experienciaPrivada: number;
  creditosOrdinarios: number;
  creditosECTS: number;
}