import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ordersfiltersReducer, productsfiltersReducer } from '@filters';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(
      { 
        productsFiltersState: productsfiltersReducer,
        ordersFiltersState: ordersfiltersReducer
      }
    ),
    // provideEffects([YourFeatureEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ],
};
