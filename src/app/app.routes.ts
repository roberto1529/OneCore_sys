import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ModsComponent } from './shared/mods/mods.component';

export const routes: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full', title : 'OneCore ERP' }, // Ruta predeterminada
    { path: 'login', component: AuthComponent, title : 'OneCore ERP' },
    { path: 'modulos', component: ModsComponent, title: 'Modulos Contratados' },
    { path: '**', component: NotfoundComponent, title: 'Acceso no autorizado' }              // Ruta 404
<<<<<<< HEAD
=======

>>>>>>> fb19c4b702db0d76030b5bf0dc6dbbe912529f0e
  ];

