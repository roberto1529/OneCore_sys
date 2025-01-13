import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AuthComponent } from './shared/auth/auth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full' }, // Ruta predeterminada
    { path: 'login', component: AuthComponent },              // Ruta para Iniciar Sesión
    { path: '**', component: NotfoundComponent }              // Ruta 404
  ];
  
=======
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },  // Ruta predeterminada  
    { path: 'login', component: AuthComponent },  // Ruta para About
    { path: '**', component: AuthComponent }  
];
>>>>>>> 363df961c503599038054d41ccf879b5df03a60f
