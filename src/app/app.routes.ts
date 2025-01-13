import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full' }, // Ruta predeterminada
    { path: 'login', component: AuthComponent },              // Ruta para Iniciar Sesión
    { path: '**', component: NotfoundComponent }              // Ruta 404
  ];
  