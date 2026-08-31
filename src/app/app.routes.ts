import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'info-emergencia',
    loadComponent: () => import('./pages/info-emergencia/info-emergencia.page').then( m => m.InfoEmergenciaPage)
  },
];
