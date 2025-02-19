import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';  // Importar provideHttpClient
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimiza el cambio de detección para mejorar el rendimiento
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    provideHttpClient(),
    // Habilita animaciones de forma asíncrona
    provideAnimationsAsync(),

    // Configuración de enrutador con soporte para hash-based routing
    provideRouter(routes, withHashLocation()),

    // Configuración de PrimeNG con tema Aura
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',         // Prefijo para los estilos de PrimeNG       darkModeSelector: 'light', // Selector para cambiar entre modos claro/oscuro
          cssLayer: true       // Habilita capas de CSS
        }
      }
    })
  ]
};
