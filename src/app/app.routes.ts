import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ModsComponent } from './shared/mods/mods.component';

export const routes: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full' }, // Ruta predeterminada
    { path: 'login', component: AuthComponent },
    { path: 'modulos', component: ModsComponent, title: 'Modulos Contratados' },
    { path: '**', component: NotfoundComponent }              // Ruta 404
  ];

