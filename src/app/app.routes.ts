import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },  // Ruta predeterminada  
    { path: 'login', component: AuthComponent },  // Ruta para About
    { path: '**', component: AuthComponent }  
];
