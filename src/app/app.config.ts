import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [
    // Optimiza el cambio de detección para mejorar el rendimiento
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    
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
=======
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideRouter(routes),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'light',
                    cssLayer: true,
              }
            }
        }),

    ]
>>>>>>> 363df961c503599038054d41ccf879b5df03a60f
};
